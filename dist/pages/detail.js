"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _htmlParser = require('./../components/htmlParser.js');

var _htmlParser2 = _interopRequireDefault(_htmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "博客正文"
    }, _this.$repeat = {}, _this.$props = { "htmlParser": { "xmlns:v-bind": "", "v-bind:parserName.once": "name", "v-bind:parserContent.sync": "content", "parserType": "md" } }, _this.$events = {}, _this.components = {
      htmlParser: _htmlParser2.default
    }, _this.data = {
      name: "temp",
      content: '加载中...'
    }, _this.onLoad = function (options) {
      wx.request({
        url: options.id,
        success: function success(e) {
          _this.content = e.data;
          _this.$apply();
          _this.$invoke('htmlParser', 'htmlParserNotice');
        }
      });
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJodG1sUGFyc2VyIiwiZGF0YSIsIm5hbWUiLCJjb250ZW50Iiwib25Mb2FkIiwid3giLCJyZXF1ZXN0IiwidXJsIiwib3B0aW9ucyIsImlkIiwic3VjY2VzcyIsImUiLCIkYXBwbHkiLCIkaW52b2tlIiwid2F0Y2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLE1BQTVDLEVBQW1ELDZCQUE0QixTQUEvRSxFQUF5RixjQUFhLElBQXRHLEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBSVpDLEksR0FBTztBQUNMQyxZQUFNLE1BREQ7QUFFTEMsZUFBUztBQUZKLEssUUFLUEMsTSxHQUFTLG1CQUFXO0FBQ2xCQyxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBS0MsUUFBUUMsRUFESjtBQUVUQyxpQkFBUyxvQkFBSztBQUNaLGdCQUFLUCxPQUFMLEdBQWdCUSxFQUFFVixJQUFsQjtBQUNBLGdCQUFLVyxNQUFMO0FBQ0EsZ0JBQUtDLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLGtCQUEzQjtBQUNEO0FBTlEsT0FBWDtBQVFELEssUUFFREMsSyxHQUFRLEU7Ozs7RUE1QnlCLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IGh0bWxQYXJzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaHRtbFBhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWNmuWuouato+aWh1wiXG4gIH07XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImh0bWxQYXJzZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBhcnNlck5hbWUub25jZVwiOlwibmFtZVwiLFwidi1iaW5kOnBhcnNlckNvbnRlbnQuc3luY1wiOlwiY29udGVudFwiLFwicGFyc2VyVHlwZVwiOlwibWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGh0bWxQYXJzZXJcbiAgfTtcblxuICBkYXRhID0ge1xuICAgIG5hbWU6IFwidGVtcFwiLFxuICAgIGNvbnRlbnQ6ICfliqDovb3kuK0uLi4nLFxuICB9O1xuXG4gIG9uTG9hZCA9IG9wdGlvbnMgPT4ge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBvcHRpb25zLmlkLFxuICAgICAgc3VjY2VzczogZSA9PiB7XG4gICAgICAgIHRoaXMuY29udGVudCA9ICBlLmRhdGE7IFxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB0aGlzLiRpbnZva2UoJ2h0bWxQYXJzZXInLCAnaHRtbFBhcnNlck5vdGljZScpXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgd2F0Y2ggPSB7XG5cbiAgfVxufVxuIl19