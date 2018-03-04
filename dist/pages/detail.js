"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _htmlParser = require('./../components/htmlParser.js');

var _htmlParser2 = _interopRequireDefault(_htmlParser);

var _comment = require('./../components/comment.js');

var _comment2 = _interopRequireDefault(_comment);

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
      htmlParser: _htmlParser2.default,
      comment: _comment2.default
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJodG1sUGFyc2VyIiwiY29tbWVudCIsImRhdGEiLCJuYW1lIiwiY29udGVudCIsIm9uTG9hZCIsInd4IiwicmVxdWVzdCIsInVybCIsIm9wdGlvbnMiLCJpZCIsInN1Y2Nlc3MiLCJlIiwiJGFwcGx5IiwiJGludm9rZSIsIndhdGNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLE1BQTVDLEVBQW1ELDZCQUE0QixTQUEvRSxFQUF5RixjQUFhLElBQXRHLEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsc0NBRFU7QUFFVkM7QUFGVSxLLFFBS1pDLEksR0FBTztBQUNMQyxZQUFNLE1BREQ7QUFFTEMsZUFBUztBQUZKLEssUUFLUEMsTSxHQUFTLG1CQUFXO0FBQ2xCQyxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBS0MsUUFBUUMsRUFESjtBQUVUQyxpQkFBUyxvQkFBSztBQUNaLGdCQUFLUCxPQUFMLEdBQWdCUSxFQUFFVixJQUFsQjtBQUNBLGdCQUFLVyxNQUFMO0FBQ0EsZ0JBQUtDLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLGtCQUEzQjtBQUNEO0FBTlEsT0FBWDtBQVFELEssUUFFREMsSyxHQUFRLEU7Ozs7RUE3QnlCLGVBQUtDLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IGh0bWxQYXJzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaHRtbFBhcnNlclwiO1xuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLljZrlrqLmraPmlodcIlxuICB9O1xuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJodG1sUGFyc2VyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwYXJzZXJOYW1lLm9uY2VcIjpcIm5hbWVcIixcInYtYmluZDpwYXJzZXJDb250ZW50LnN5bmNcIjpcImNvbnRlbnRcIixcInBhcnNlclR5cGVcIjpcIm1kXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBodG1sUGFyc2VyLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnQsXG4gIH07XG5cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiBcInRlbXBcIixcbiAgICBjb250ZW50OiAn5Yqg6L295LitLi4uJyxcbiAgfTtcblxuICBvbkxvYWQgPSBvcHRpb25zID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogb3B0aW9ucy5pZCxcbiAgICAgIHN1Y2Nlc3M6IGUgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSAgZS5kYXRhOyBcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdodG1sUGFyc2VyJywgJ2h0bWxQYXJzZXJOb3RpY2UnKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHdhdGNoID0ge1xuXG4gIH1cbn1cbiJdfQ==