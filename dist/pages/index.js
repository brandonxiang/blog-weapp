"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Card = require('./../components/Card.js');

var _Card2 = _interopRequireDefault(_Card);

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
      navigationBarTitleText: "我的博客"
    }, _this.$repeat = { "list": { "com": "card", "props": "" } }, _this.$props = { "card": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:title.once": { "value": "item.title", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:desc.once": { "value": "item.desc", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:id.once": { "value": "item.id", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      card: _Card2.default
    }, _this.data = {
      list: [{
        id: "https://raw.githubusercontent.com/PaicFE/blog/master/blog/AC.md",
        title: "AlloyTeam前端大会的技术一览",
        desc: "AlloyTeam Conf是一个干货非常集中的前端大会"
      }, {
        id: "https://raw.githubusercontent.com/PaicFE/blog/master/blog/bem.md",
        title: "入门BEM",
        desc: "你的样式类名是怎么命名的？"
      }, {
        id: "https://raw.githubusercontent.com/PaicFE/blog/master/blog/iframe-height.md",
        title: "如何动态获取跨域iframe高度",
        desc: "iframe你懂多少？"
      }, {
        id: "https://raw.githubusercontent.com/PaicFE/blog/master/blog/CI.md",
        title: "持续集成",
        desc: "不，是你的前端代码部署"
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhcmQiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJkZXNjIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsRUFBdEIsRUFBUixFLFFBQ1hDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sT0FBN0QsRUFBaEIsRUFBc0YscUJBQW9CLEVBQUMsU0FBUSxZQUFULEVBQXNCLE9BQU0sTUFBNUIsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBMUcsRUFBMEwsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsUUFBTyxNQUF6QyxFQUFnRCxTQUFRLE9BQXhELEVBQWdFLE9BQU0sT0FBdEUsRUFBN00sRUFBNFIsa0JBQWlCLEVBQUMsU0FBUSxTQUFULEVBQW1CLE9BQU0sTUFBekIsRUFBZ0MsUUFBTyxNQUF2QyxFQUE4QyxTQUFRLE9BQXRELEVBQThELE9BQU0sT0FBcEUsRUFBN1MsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSjtBQUNFQyxZQUFJLGlFQUROO0FBRUVDLGVBQU8sb0JBRlQ7QUFHRUMsY0FBTTtBQUhSLE9BREksRUFNSjtBQUNFRixZQUFJLGtFQUROO0FBRUVDLGVBQU8sT0FGVDtBQUdFQyxjQUFNO0FBSFIsT0FOSSxFQVdKO0FBQ0VGLFlBQUcsNEVBREw7QUFFRUMsZUFBTyxrQkFGVDtBQUdFQyxjQUFNO0FBSFIsT0FYSSxFQWdCSjtBQUNFRixZQUFHLGlFQURMO0FBRUVDLGVBQU8sTUFGVDtBQUdFQyxjQUFNO0FBSFIsT0FoQkk7QUFERCxLOzs7O0VBWjBCLGVBQUtDLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLmiJHnmoTljZrlrqJcIlxuICB9O1xuXG4gJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcImNhcmRcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJjYXJkXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6dGl0bGUub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLnRpdGxlXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpkZXNjLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5kZXNjXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppZC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uaWRcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY2FyZDogQ2FyZFxuICB9O1xuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBpZDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGFpY0ZFL2Jsb2cvbWFzdGVyL2Jsb2cvQUMubWRcIixcbiAgICAgICAgdGl0bGU6IFwiQWxsb3lUZWFt5YmN56uv5aSn5Lya55qE5oqA5pyv5LiA6KeIXCIsXG4gICAgICAgIGRlc2M6IFwiQWxsb3lUZWFtIENvbmbmmK/kuIDkuKrlubLotKfpnZ7luLjpm4bkuK3nmoTliY3nq6/lpKfkvJpcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhaWNGRS9ibG9nL21hc3Rlci9ibG9nL2JlbS5tZFwiLFxuICAgICAgICB0aXRsZTogXCLlhaXpl6hCRU1cIixcbiAgICAgICAgZGVzYzogXCLkvaDnmoTmoLflvI/nsbvlkI3mmK/mgI7kuYjlkb3lkI3nmoTvvJ9cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGFpY0ZFL2Jsb2cvbWFzdGVyL2Jsb2cvaWZyYW1lLWhlaWdodC5tZFwiLFxuICAgICAgICB0aXRsZTogXCLlpoLkvZXliqjmgIHojrflj5bot6jln59pZnJhbWXpq5jluqZcIixcbiAgICAgICAgZGVzYzogXCJpZnJhbWXkvaDmh4LlpJrlsJHvvJ9cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGFpY0ZFL2Jsb2cvbWFzdGVyL2Jsb2cvQ0kubWRcIixcbiAgICAgICAgdGl0bGU6IFwi5oyB57ut6ZuG5oiQXCIsXG4gICAgICAgIGRlc2M6IFwi5LiN77yM5piv5L2g55qE5YmN56uv5Luj56CB6YOo572yXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG4iXX0=