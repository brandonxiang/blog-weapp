'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../plugins/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLParser = function (_wepy$component) {
  _inherits(HTMLParser, _wepy$component);

  function HTMLParser() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, HTMLParser);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTMLParser.__proto__ || Object.getPrototypeOf(HTMLParser)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      parserName: {
        type: String,
        default: 'htmlParserName'
      },
      parserContent: {
        type: String,
        default: '<p style=\'font-size: 32rpx; padding: 30rpx 0; text-align: center;\'>没有任何内容</p>'
      },
      parserType: {
        type: String,
        default: 'html'
      },
      parserPadding: {
        type: Number,
        default: 0
      }
    }, _this.data = {
      htmlParserTpl: {},
      bindData: {}
    }, _this.events = {
      'htmlParser-broadcast': function htmlParserBroadcast($event) {}
    }, _this.methods = {
      htmlParserNotice: function htmlParserNotice() {
        console.log(this.parserContent);
        this.htmlParse();
      }
    }, _this.watch = {
      parserContent: function parserContent(oldvalue, newvalue) {
        console.log(oldvalue, newvalue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTMLParser, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.htmlParse();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'wxParseImgLoad',
    value: function wxParseImgLoad(image) {
      var imgInfo = image.detail;
    }
  }, {
    key: 'htmlParse',
    value: function htmlParse() {
      /**
       * WxParse.wxParse(bindName , type, data, target,imagePadding)
       * 1.bindName绑定的数据名(必填)
       * 2.type可以为html或者md(必填)
       * 3.data为传入的具体数据(必填)
       * 4.target为Page对象,一般为this(必填)
       * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
       */
      try {
        console.log(_wxParse2.default);
        var htmlContent = _wxParse2.default.wxParse(this.parserName, this.parserType, this.parserContent || this.props.parserContent.default, this, this.parserPadding);
        this.htmlParserTpl = htmlContent[this.parserName];
        this.$apply();
      } catch (e) {
        console.warn('kinerHtmlParser:', '没有任何内容需要转换', e);
      }
    }
  }, {
    key: 'wxParseImgTap',
    value: function wxParseImgTap(e) {
      _wxParse2.default.wxParseImgTap(e, this.bindData);
    }
  }]);

  return HTMLParser;
}(_wepy2.default.component);

exports.default = HTMLParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWxQYXJzZXIuanMiXSwibmFtZXMiOlsiSFRNTFBhcnNlciIsInByb3BzIiwicGFyc2VyTmFtZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwicGFyc2VyQ29udGVudCIsInBhcnNlclR5cGUiLCJwYXJzZXJQYWRkaW5nIiwiTnVtYmVyIiwiZGF0YSIsImh0bWxQYXJzZXJUcGwiLCJiaW5kRGF0YSIsImV2ZW50cyIsIiRldmVudCIsIm1ldGhvZHMiLCJodG1sUGFyc2VyTm90aWNlIiwiY29uc29sZSIsImxvZyIsImh0bWxQYXJzZSIsIndhdGNoIiwib2xkdmFsdWUiLCJuZXd2YWx1ZSIsImltYWdlIiwiaW1nSW5mbyIsImRldGFpbCIsImh0bWxDb250ZW50Iiwid3hQYXJzZSIsIiRhcHBseSIsImUiLCJ3YXJuIiwid3hQYXJzZUltZ1RhcCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZO0FBQ1ZDLGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQUROO0FBS05DLHFCQUFlO0FBQ2JILGNBQU1DLE1BRE87QUFFYkMsaUJBQVM7QUFGSSxPQUxUO0FBU05FLGtCQUFZO0FBQ1ZKLGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQVROO0FBYU5HLHFCQUFlO0FBQ2JMLGNBQU1NLE1BRE87QUFFYkosaUJBQVM7QUFGSTtBQWJULEssUUFtQlJLLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUtQQyxNLEdBQVM7QUFDUCw4QkFBd0IsNkJBQUNDLE1BQUQsRUFBcUIsQ0FDNUM7QUFGTSxLLFFBS1RDLE8sR0FBVTtBQUNSQyxzQkFEUSw4QkFDWTtBQUNsQkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLWixhQUFqQjtBQUNBLGFBQUthLFNBQUw7QUFDRDtBQUpPLEssUUFXVkMsSyxHQUFRO0FBQ05kLG1CQURNLHlCQUNRZSxRQURSLEVBQ2tCQyxRQURsQixFQUM0QjtBQUNoQ0wsZ0JBQVFDLEdBQVIsQ0FBWUcsUUFBWixFQUFzQkMsUUFBdEI7QUFDRDtBQUhLLEs7Ozs7Ozs7Ozs7O0FBSE4scUJBQUtILFNBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FTY0ksSyxFQUFPO0FBQ3JCLFVBQUlDLFVBQVVELE1BQU1FLE1BQXBCO0FBQ0Q7OztnQ0FFWTtBQUNYOzs7Ozs7OztBQVFBLFVBQUk7QUFDRlIsZ0JBQVFDLEdBQVI7QUFDQSxZQUFJUSxjQUFjLGtCQUFRQyxPQUFSLENBQWdCLEtBQUt6QixVQUFyQixFQUFpQyxLQUFLSyxVQUF0QyxFQUFrRCxLQUFLRCxhQUFMLElBQXNCLEtBQUtMLEtBQUwsQ0FBV0ssYUFBWCxDQUF5QkQsT0FBakcsRUFBMEcsSUFBMUcsRUFBZ0gsS0FBS0csYUFBckgsQ0FBbEI7QUFDQSxhQUFLRyxhQUFMLEdBQXFCZSxZQUFZLEtBQUt4QixVQUFqQixDQUFyQjtBQUNBLGFBQUswQixNQUFMO0FBQ0QsT0FMRCxDQUtFLE9BQU9DLENBQVAsRUFBVTtBQUNWWixnQkFBUWEsSUFBUixDQUFhLGtCQUFiLEVBQWlDLFlBQWpDLEVBQStDRCxDQUEvQztBQUNEO0FBQ0Y7OztrQ0FFY0EsQyxFQUFHO0FBQ2hCLHdCQUFRRSxhQUFSLENBQXNCRixDQUF0QixFQUF5QixLQUFLakIsUUFBOUI7QUFDRDs7OztFQXhFcUMsZUFBS29CLFM7O2tCQUF4QmhDLFUiLCJmaWxlIjoiaHRtbFBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi9wbHVnaW5zL3d4UGFyc2Uvd3hQYXJzZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MUGFyc2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgcGFyc2VyTmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodG1sUGFyc2VyTmFtZSdcbiAgICAgIH0sXG4gICAgICBwYXJzZXJDb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJzxwIHN0eWxlPVxcJ2ZvbnQtc2l6ZTogMzJycHg7IHBhZGRpbmc6IDMwcnB4IDA7IHRleHQtYWxpZ246IGNlbnRlcjtcXCc+5rKh5pyJ5Lu75L2V5YaF5a65PC9wPidcbiAgICAgIH0sXG4gICAgICBwYXJzZXJUeXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2h0bWwnXG4gICAgICB9LFxuICAgICAgcGFyc2VyUGFkZGluZzoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaHRtbFBhcnNlclRwbDoge30sXG4gICAgICBiaW5kRGF0YToge31cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaHRtbFBhcnNlci1icm9hZGNhc3QnOiAoJGV2ZW50LCAuLi5hcmdzKSA9PiB7XG4gICAgICB9LFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBodG1sUGFyc2VyTm90aWNlICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXJzZXJDb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sUGFyc2UoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLmh0bWxQYXJzZSgpXG4gICAgfTtcblxuICAgIHdhdGNoID0ge1xuICAgICAgcGFyc2VyQ29udGVudChvbGR2YWx1ZSwgbmV3dmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2cob2xkdmFsdWUsIG5ld3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd3hQYXJzZUltZ0xvYWQgKGltYWdlKSB7XG4gICAgICBsZXQgaW1nSW5mbyA9IGltYWdlLmRldGFpbFxuICAgIH07XG5cbiAgICBodG1sUGFyc2UgKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBXeFBhcnNlLnd4UGFyc2UoYmluZE5hbWUgLCB0eXBlLCBkYXRhLCB0YXJnZXQsaW1hZ2VQYWRkaW5nKVxuICAgICAgICogMS5iaW5kTmFtZee7keWumueahOaVsOaNruWQjSjlv4XloaspXG4gICAgICAgKiAyLnR5cGXlj6/ku6XkuLpodG1s5oiW6ICFbWQo5b+F5aGrKVxuICAgICAgICogMy5kYXRh5Li65Lyg5YWl55qE5YW35L2T5pWw5o2uKOW/heWhqylcbiAgICAgICAqIDQudGFyZ2V05Li6UGFnZeWvueixoSzkuIDoiKzkuLp0aGlzKOW/heWhqylcbiAgICAgICAqIDUuaW1hZ2VQYWRkaW5n5Li65b2T5Zu+54mH6Ieq6YCC5bqU5piv5bem5Y+z55qE5Y2V5LiAcGFkZGluZyjpu5jorqTkuLowLOWPr+mAiSlcbiAgICAgICAqL1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coV3hQYXJzZSk7XG4gICAgICAgIGxldCBodG1sQ29udGVudCA9IFd4UGFyc2Uud3hQYXJzZSh0aGlzLnBhcnNlck5hbWUsIHRoaXMucGFyc2VyVHlwZSwgdGhpcy5wYXJzZXJDb250ZW50IHx8IHRoaXMucHJvcHMucGFyc2VyQ29udGVudC5kZWZhdWx0LCB0aGlzLCB0aGlzLnBhcnNlclBhZGRpbmcpXG4gICAgICAgIHRoaXMuaHRtbFBhcnNlclRwbCA9IGh0bWxDb250ZW50W3RoaXMucGFyc2VyTmFtZV1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2tpbmVySHRtbFBhcnNlcjonLCAn5rKh5pyJ5Lu75L2V5YaF5a656ZyA6KaB6L2s5o2iJywgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3eFBhcnNlSW1nVGFwIChlKSB7XG4gICAgICBXeFBhcnNlLnd4UGFyc2VJbWdUYXAoZSwgdGhpcy5iaW5kRGF0YSlcbiAgICB9XG5cbiAgfVxuIl19