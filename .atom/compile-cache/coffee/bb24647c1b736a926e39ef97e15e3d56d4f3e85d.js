(function() {
  var Beautifiers, JsDiff, beautifier, fs, isWindows, path;

  Beautifiers = require("../src/beautifiers");

  beautifier = new Beautifiers();

  fs = require("fs");

  path = require("path");

  JsDiff = require('diff');

  isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';

  describe("BeautifyLanguages", function() {
    var allLanguages, config, configs, dependentPackages, lang, optionsDir, _fn, _i, _j, _len, _len1, _results;
    optionsDir = path.resolve(__dirname, "../examples");
    allLanguages = ["c", "coffee-script", "css", "html", "java", "javascript", "json", "less", "mustache", "objective-c", "perl", "php", "python", "ruby", "sass", "sql", "svg", "xml", "csharp", "gfm", "marko", "go", "html-swig"];
    dependentPackages = ['autocomplete-plus'];
    _fn = function(lang) {
      return dependentPackages.push("language-" + lang);
    };
    for (_i = 0, _len = allLanguages.length; _i < _len; _i++) {
      lang = allLanguages[_i];
      _fn(lang);
    }
    beforeEach(function() {
      var packageName, _fn1, _j, _len1;
      _fn1 = function(packageName) {
        return waitsForPromise(function() {
          return atom.packages.activatePackage(packageName);
        });
      };
      for (_j = 0, _len1 = dependentPackages.length; _j < _len1; _j++) {
        packageName = dependentPackages[_j];
        _fn1(packageName);
      }
      return waitsForPromise(function() {
        var activationPromise, pack;
        activationPromise = atom.packages.activatePackage('atom-beautify');
        pack = atom.packages.getLoadedPackage("atom-beautify");
        pack.activateNow();
        if (isWindows) {
          atom.config.set('atom-beautify._loggerLevel', 'verbose');
        }
        return activationPromise;
      });
    });

    /*
    Directory structure:
     - examples
       - config1
         - lang1
           - original
             - 1 - test.ext
           - expected
             - 1 - test.ext
         - lang2
       - config2
     */
    configs = fs.readdirSync(optionsDir);
    _results = [];
    for (_j = 0, _len1 = configs.length; _j < _len1; _j++) {
      config = configs[_j];
      _results.push((function(config) {
        var langsDir, optionStats;
        langsDir = path.resolve(optionsDir, config);
        optionStats = fs.lstatSync(langsDir);
        if (optionStats.isDirectory()) {
          return describe("when using configuration '" + config + "'", function() {
            var langNames, _k, _len2, _results1;
            langNames = fs.readdirSync(langsDir);
            _results1 = [];
            for (_k = 0, _len2 = langNames.length; _k < _len2; _k++) {
              lang = langNames[_k];
              _results1.push((function(lang) {
                var expectedDir, langStats, originalDir, testsDir;
                testsDir = path.resolve(langsDir, lang);
                langStats = fs.lstatSync(testsDir);
                if (langStats.isDirectory()) {
                  originalDir = path.resolve(testsDir, "original");
                  if (!fs.existsSync(originalDir)) {
                    console.warn("Directory for test originals/inputs not found." + (" Making it at " + originalDir + "."));
                    fs.mkdirSync(originalDir);
                  }
                  expectedDir = path.resolve(testsDir, "expected");
                  if (!fs.existsSync(expectedDir)) {
                    console.warn("Directory for test expected/results not found." + ("Making it at " + expectedDir + "."));
                    fs.mkdirSync(expectedDir);
                  }
                  return describe("when beautifying language '" + lang + "'", function() {
                    var testFileName, testNames, _l, _len3, _results2;
                    testNames = fs.readdirSync(originalDir);
                    _results2 = [];
                    for (_l = 0, _len3 = testNames.length; _l < _len3; _l++) {
                      testFileName = testNames[_l];
                      _results2.push((function(testFileName) {
                        var ext, testName;
                        ext = path.extname(testFileName);
                        testName = path.basename(testFileName, ext);
                        if (testFileName[0] === '_') {
                          return;
                        }
                        return it("" + testName + " " + testFileName, function() {
                          var allOptions, beautifyCompleted, completionFun, expectedContents, expectedTestPath, grammar, grammarName, language, originalContents, originalTestPath, _ref, _ref1;
                          originalTestPath = path.resolve(originalDir, testFileName);
                          expectedTestPath = path.resolve(expectedDir, testFileName);
                          originalContents = (_ref = fs.readFileSync(originalTestPath)) != null ? _ref.toString() : void 0;
                          if (!fs.existsSync(expectedTestPath)) {
                            throw new Error(("No matching expected test result found for '" + testName + "' ") + ("at '" + expectedTestPath + "'."));
                          }
                          expectedContents = (_ref1 = fs.readFileSync(expectedTestPath)) != null ? _ref1.toString() : void 0;
                          grammar = atom.grammars.selectGrammar(originalTestPath, originalContents);
                          grammarName = grammar.name;
                          allOptions = beautifier.getOptionsForPath(originalTestPath);
                          language = beautifier.getLanguage(grammarName, testFileName);
                          beautifyCompleted = false;
                          completionFun = function(text) {
                            var diff, e, fileName, newHeader, newStr, oldHeader, oldStr, opts, selectedBeautifier;
                            try {
                              expect(text instanceof Error).not.toEqual(true, text);
                              if (text instanceof Error) {
                                return beautifyCompleted = true;
                              }
                              expect(text).not.toEqual(null, "Language or Beautifier not found");
                              if (text === null) {
                                return beautifyCompleted = true;
                              }
                              expect(typeof text).toEqual("string", "Text: " + text);
                              if (typeof text !== "string") {
                                return beautifyCompleted = true;
                              }
                              text = text.replace(/(?:\r\n|\r|\n)/g, '⏎\n');
                              expectedContents = expectedContents.replace(/(?:\r\n|\r|\n)/g, '⏎\n');
                              text = text.replace(/(?:\t)/g, '↹');
                              expectedContents = expectedContents.replace(/(?:\t)/g, '↹');
                              text = text.replace(/(?:\ )/g, '␣');
                              expectedContents = expectedContents.replace(/(?:\ )/g, '␣');
                              if (text !== expectedContents) {
                                fileName = expectedTestPath;
                                oldStr = text;
                                newStr = expectedContents;
                                oldHeader = "beautified";
                                newHeader = "expected";
                                diff = JsDiff.createPatch(fileName, oldStr, newStr, oldHeader, newHeader);
                                opts = beautifier.getOptionsForLanguage(allOptions, language);
                                selectedBeautifier = beautifier.getBeautifierForLanguage(language);
                                if (selectedBeautifier != null) {
                                  opts = beautifier.transformOptions(selectedBeautifier, language.name, opts);
                                }
                                expect(text).toEqual(expectedContents, "Beautifier '" + (selectedBeautifier != null ? selectedBeautifier.name : void 0) + "' output does not match expected output:\n" + diff + "\n\nWith options:\n" + (JSON.stringify(opts, void 0, 4)));
                              }
                              return beautifyCompleted = true;
                            } catch (_error) {
                              e = _error;
                              console.error(e);
                              return beautifyCompleted = e;
                            }
                          };
                          runs(function() {
                            var e;
                            try {
                              return beautifier.beautify(originalContents, allOptions, grammarName, testFileName).then(completionFun)["catch"](completionFun);
                            } catch (_error) {
                              e = _error;
                              return beautifyCompleted = e;
                            }
                          });
                          return waitsFor(function() {
                            if (beautifyCompleted instanceof Error) {
                              throw beautifyCompleted;
                            } else {
                              return beautifyCompleted;
                            }
                          }, "Waiting for beautification to complete", 60000);
                        });
                      })(testFileName));
                    }
                    return _results2;
                  });
                }
              })(lang));
            }
            return _results1;
          });
        }
      })(config));
    }
    return _results;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9hdG9tLWJlYXV0aWZ5L3NwZWMvYmVhdXRpZnktbGFuZ3VhZ2VzLXNwZWMuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFBQSxNQUFBLG9EQUFBOztBQUFBLEVBQUEsV0FBQSxHQUFjLE9BQUEsQ0FBUSxvQkFBUixDQUFkLENBQUE7O0FBQUEsRUFDQSxVQUFBLEdBQWlCLElBQUEsV0FBQSxDQUFBLENBRGpCLENBQUE7O0FBQUEsRUFFQSxFQUFBLEdBQUssT0FBQSxDQUFRLElBQVIsQ0FGTCxDQUFBOztBQUFBLEVBR0EsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSLENBSFAsQ0FBQTs7QUFBQSxFQUlBLE1BQUEsR0FBUyxPQUFBLENBQVEsTUFBUixDQUpULENBQUE7O0FBQUEsRUFZQSxTQUFBLEdBQVksT0FBTyxDQUFDLFFBQVIsS0FBb0IsT0FBcEIsSUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQVosS0FBc0IsUUFEWixJQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBWixLQUFzQixNQWR4QixDQUFBOztBQUFBLEVBZ0JBLFFBQUEsQ0FBUyxtQkFBVCxFQUE4QixTQUFBLEdBQUE7QUFFNUIsUUFBQSxzR0FBQTtBQUFBLElBQUEsVUFBQSxHQUFhLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBYixFQUF3QixhQUF4QixDQUFiLENBQUE7QUFBQSxJQUdBLFlBQUEsR0FBZSxDQUNiLEdBRGEsRUFDUixlQURRLEVBQ1MsS0FEVCxFQUNnQixNQURoQixFQUViLE1BRmEsRUFFTCxZQUZLLEVBRVMsTUFGVCxFQUVpQixNQUZqQixFQUdiLFVBSGEsRUFHRCxhQUhDLEVBR2MsTUFIZCxFQUdzQixLQUh0QixFQUliLFFBSmEsRUFJSCxNQUpHLEVBSUssTUFKTCxFQUlhLEtBSmIsRUFJb0IsS0FKcEIs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

//# sourceURL=/home/qual/.atom/packages/atom-beautify/spec/beautify-languages-spec.coffee
