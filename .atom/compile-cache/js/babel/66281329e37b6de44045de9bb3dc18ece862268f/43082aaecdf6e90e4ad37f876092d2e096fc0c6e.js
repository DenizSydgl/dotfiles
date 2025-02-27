'use babel';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var StatusBarItem = (function () {
  function StatusBarItem() {
    _classCallCheck(this, StatusBarItem);

    this.element = document.createElement('a');
    this.element.className = 'line-ending-tile inline-block';
    this.setLineEndings(new Set());
  }

  _createClass(StatusBarItem, [{
    key: 'setLineEndings',
    value: function setLineEndings(lineEndings) {
      this.lineEndings = lineEndings;
      this.element.textContent = lineEndingName(lineEndings);
    }
  }, {
    key: 'hasLineEnding',
    value: function hasLineEnding(lineEnding) {
      return this.lineEndings.has(lineEnding);
    }
  }, {
    key: 'onClick',
    value: function onClick(callback) {
      this.element.addEventListener('click', callback);
    }
  }]);

  return StatusBarItem;
})();

exports['default'] = StatusBarItem;

function lineEndingName(lineEndings) {
  if (lineEndings.size > 1) {
    return 'Mixed';
  } else if (lineEndings.has('\n')) {
    return 'LF';
  } else if (lineEndings.has('\r\n')) {
    return 'CRLF';
  } else if (lineEndings.has('\r')) {
    return 'CR';
  } else {
    return '';
  }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2F0b20tMS40LjMvbm9kZV9tb2R1bGVzL2xpbmUtZW5kaW5nLXNlbGVjdG9yL2xpYi9zdGF0dXMtYmFyLWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxDQUFBOztBQ0VYLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLFlBQVksR0FBRyxDQUFDLFlBQVk7QUFBRSxXQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBRSxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUFFLFVBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQUFBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxBQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FBRTtHQUFFLEFBQUMsT0FBTyxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQUUsUUFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxBQUFDLElBQUksV0FBVyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxBQUFDLE9BQU8sV0FBVyxDQUFDO0dBQUUsQ0FBQztDQUFFLENBQUEsRUFBRyxDQUFDOztBQUV0akIsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUFFLE1BQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFBLEFBQUMsRUFBRTtBQUFFLFVBQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQztHQUFFO0NBQUU7O0FBRXpKLElEUnFCLGFBQWEsR0FBQSxDQUFBLFlBQUE7QUFDcEIsV0FETyxhQUFhLEdBQ2pCO0FDU2IsbUJBQWUsQ0FBQyxJQUFJLEVEVkgsYUFBYSxDQUFBLENBQUE7O0FBRTlCLFFBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQyxRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRywrQkFBK0IsQ0FBQTtBQUN4RCxRQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQTtHQUMvQjs7QUNZRCxjQUFZLENEakJPLGFBQWEsRUFBQSxDQUFBO0FDa0I5QixPQUFHLEVBQUUsZ0JBQWdCO0FBQ3JCLFNBQUssRURaUSxTQUFBLGNBQUEsQ0FBQyxXQUFXLEVBQUU7QUFDM0IsVUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7QUFDOUIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ3ZEO0dDYUEsRUFBRTtBQUNELE9BQUcsRUFBRSxlQUFlO0FBQ3BCLFNBQUssRURiTyxTQUFBLGFBQUEsQ0FBQyxVQUFVLEVBQUU7QUFDekIsYUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtLQUN4QztHQ2NBLEVBQUU7QUFDRCxPQUFHLEVBQUUsU0FBUztBQUNkLFNBQUssRURkQyxTQUFBLE9BQUEsQ0FBQyxRQUFRLEVBQUU7QUFDakIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUE7S0FDakQ7R0NlQSxDQUFDLENBQUMsQ0FBQzs7QUFFSixTRG5DbUIsYUFBYSxDQUFBO0NDb0NqQyxDQUFBLEVBQUcsQ0FBQzs7QUFFTCxPQUFPLENBQUMsU0FBUyxDQUFDLEdEdENHLGFBQWEsQ0FBQTs7QUFxQmxDLFNBQVMsY0FBYyxDQUFFLFdBQVcsRUFBRTtBQUNwQyxNQUFJLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO0FBQ3hCLFdBQU8sT0FBTyxDQUFBO0dBQ2YsTUFBTSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQUE7R0FDWixNQUFNLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNsQyxXQUFPLE1BQU0sQ0FBQTtHQUNkLE1BQU0sSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2hDLFdBQU8sSUFBSSxDQUFBO0dBQ1osTUFBTTtBQUNMLFdBQU8sRUFBRSxDQUFBO0dBQ1Y7Q0FDRjtBQ29CRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJzdGF0dXMtYmFyLWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXNCYXJJdGVtIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbGluZS1lbmRpbmctdGlsZSBpbmxpbmUtYmxvY2snXG4gICAgdGhpcy5zZXRMaW5lRW5kaW5ncyhuZXcgU2V0KCkpXG4gIH1cblxuICBzZXRMaW5lRW5kaW5ncyAobGluZUVuZGluZ3MpIHtcbiAgICB0aGlzLmxpbmVFbmRpbmdzID0gbGluZUVuZGluZ3NcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5lRW5kaW5nTmFtZShsaW5lRW5kaW5ncylcbiAgfVxuXG4gIGhhc0xpbmVFbmRpbmcgKGxpbmVFbmRpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lRW5kaW5ncy5oYXMobGluZUVuZGluZylcbiAgfVxuXG4gIG9uQ2xpY2sgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spXG4gIH1cbn1cblxuZnVuY3Rpb24gbGluZUVuZGluZ05hbWUgKGxpbmVFbmRpbmdzKSB7XG4gIGlmIChsaW5lRW5kaW5ncy5zaXplID4gMSkge1xuICAgIHJldHVybiAnTWl4ZWQnXG4gIH0gZWxzZSBpZiAobGluZUVuZGluZ3MuaGFzKCdcXG4nKSkge1xuICAgIHJldHVybiAnTEYnXG4gIH0gZWxzZSBpZiAobGluZUVuZGluZ3MuaGFzKCdcXHJcXG4nKSkge1xuICAgIHJldHVybiAnQ1JMRidcbiAgfSBlbHNlIGlmIChsaW5lRW5kaW5ncy5oYXMoJ1xccicpKSB7XG4gICAgcmV0dXJuICdDUidcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuIiwiJ3VzZSBiYWJlbCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFN0YXR1c0Jhckl0ZW0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdGF0dXNCYXJJdGVtKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0dXNCYXJJdGVtKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2xpbmUtZW5kaW5nLXRpbGUgaW5saW5lLWJsb2NrJztcbiAgICB0aGlzLnNldExpbmVFbmRpbmdzKG5ldyBTZXQoKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RhdHVzQmFySXRlbSwgW3tcbiAgICBrZXk6ICdzZXRMaW5lRW5kaW5ncycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldExpbmVFbmRpbmdzKGxpbmVFbmRpbmdzKSB7XG4gICAgICB0aGlzLmxpbmVFbmRpbmdzID0gbGluZUVuZGluZ3M7XG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5lRW5kaW5nTmFtZShsaW5lRW5kaW5ncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFzTGluZUVuZGluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xpbmVFbmRpbmcobGluZUVuZGluZykge1xuICAgICAgcmV0dXJuIHRoaXMubGluZUVuZGluZ3MuaGFzKGxpbmVFbmRpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0YXR1c0Jhckl0ZW07XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdGF0dXNCYXJJdGVtO1xuXG5mdW5jdGlvbiBsaW5lRW5kaW5nTmFtZShsaW5lRW5kaW5ncykge1xuICBpZiAobGluZUVuZGluZ3Muc2l6ZSA+IDEpIHtcbiAgICByZXR1cm4gJ01peGVkJztcbiAgfSBlbHNlIGlmIChsaW5lRW5kaW5ncy5oYXMoJ1xcbicpKSB7XG4gICAgcmV0dXJuICdMRic7XG4gIH0gZWxzZSBpZiAobGluZUVuZGluZ3MuaGFzKCdcXHJcXG4nKSkge1xuICAgIHJldHVybiAnQ1JMRic7XG4gIH0gZWxzZSBpZiAobGluZUVuZGluZ3MuaGFzKCdcXHInKSkge1xuICAgIHJldHVybiAnQ1InO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbiJdfQ==
//# sourceURL=/usr/share/atom/resources/app.asar/node_modules/line-ending-selector/lib/status-bar-item.js
