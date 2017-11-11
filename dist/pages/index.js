'use strict';

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
      navigationBarTitleText: '我的博客'
    }, _this.$repeat = { "list": { "com": "card", "props": "" } }, _this.$props = { "card": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:title.once": { "value": "item.title", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:desc.once": { "value": "item.desc", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:id.once": { "value": "item.id", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      card: _Card2.default
    }, _this.data = {
      list: [{ id: 'https://raw.githubusercontent.com/PaicFE/blog/master/blog/AC.md', title: 'AlloyTeam前端大会的技术一览', desc: 'AlloyTeam Conf是一个干货非常集中的前端大会。' }, { id: '28596894c331', title: '入门BEM', desc: '你的样式类名是怎么命名的？' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhcmQiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJkZXNjIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsRUFBdEIsRUFBUixFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sT0FBN0QsRUFBaEIsRUFBc0YscUJBQW9CLEVBQUMsU0FBUSxZQUFULEVBQXNCLE9BQU0sTUFBNUIsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBMUcsRUFBMEwsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsUUFBTyxNQUF6QyxFQUFnRCxTQUFRLE9BQXhELEVBQWdFLE9BQU0sT0FBdEUsRUFBN00sRUFBNFIsa0JBQWlCLEVBQUMsU0FBUSxTQUFULEVBQW1CLE9BQU0sTUFBekIsRUFBZ0MsUUFBTyxNQUF2QyxFQUE4QyxTQUFRLE9BQXRELEVBQThELE9BQU0sT0FBcEUsRUFBN1MsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0pDLFlBQU0sQ0FDSixFQUFDQyxJQUFJLGlFQUFMLEVBQXdFQyxPQUFPLG9CQUEvRSxFQUFxR0MsTUFBSywrQkFBMUcsRUFESSxFQUVKLEVBQUNGLElBQUksY0FBTCxFQUFxQkMsT0FBTyxPQUE1QixFQUFxQ0MsTUFBSyxlQUExQyxFQUZJO0FBREYsSzs7OztFQVowQixlQUFLQyxJOztrQkFBbkJiLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Y2a5a6iJ1xuICAgIH1cbiAgXG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwiY2FyZFwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcImNhcmRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDp0aXRsZS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0udGl0bGVcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmRlc2Mub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLmRlc2NcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmlkLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5pZFwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGNhcmQ6IENhcmRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgIGxpc3Q6IFtcbiAgICAgICAgIHtpZDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYWljRkUvYmxvZy9tYXN0ZXIvYmxvZy9BQy5tZCcsIHRpdGxlOiAnQWxsb3lUZWFt5YmN56uv5aSn5Lya55qE5oqA5pyv5LiA6KeIJywgZGVzYzonQWxsb3lUZWFtIENvbmbmmK/kuIDkuKrlubLotKfpnZ7luLjpm4bkuK3nmoTliY3nq6/lpKfkvJrjgIInfSxcbiAgICAgICAgIHtpZDogJzI4NTk2ODk0YzMzMScsIHRpdGxlOiAn5YWl6ZeoQkVNJywgZGVzYzon5L2g55qE5qC35byP57G75ZCN5piv5oCO5LmI5ZG95ZCN55qE77yfJ31cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuIl19