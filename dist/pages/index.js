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
      list: [{ id: 'c9e7e36c9d0e', title: 'AlloyTeam前端大会的技术一览', desc: 'AlloyTeam Conf是一个干货非常集中的前端大会。' }, { id: '28596894c331', title: '入门BEM', desc: '你的样式类名是怎么命名的？' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhcmQiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJkZXNjIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsRUFBdEIsRUFBUixFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sT0FBN0QsRUFBaEIsRUFBc0YscUJBQW9CLEVBQUMsU0FBUSxZQUFULEVBQXNCLE9BQU0sTUFBNUIsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBMUcsRUFBMEwsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsUUFBTyxNQUF6QyxFQUFnRCxTQUFRLE9BQXhELEVBQWdFLE9BQU0sT0FBdEUsRUFBN00sRUFBNFIsa0JBQWlCLEVBQUMsU0FBUSxTQUFULEVBQW1CLE9BQU0sTUFBekIsRUFBZ0MsUUFBTyxNQUF2QyxFQUE4QyxTQUFRLE9BQXRELEVBQThELE9BQU0sT0FBcEUsRUFBN1MsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0pDLFlBQU0sQ0FDSixFQUFDQyxJQUFJLGNBQUwsRUFBcUJDLE9BQU8sb0JBQTVCLEVBQWtEQyxNQUFLLCtCQUF2RCxFQURJLEVBRUosRUFBQ0YsSUFBSSxjQUFMLEVBQXFCQyxPQUFPLE9BQTVCLEVBQXFDQyxNQUFLLGVBQTFDLEVBRkk7QUFERixLOzs7O0VBWjBCLGVBQUtDLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTljZrlrqInXG4gICAgfVxuICBcbiAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJjYXJkXCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1wiY2FyZFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnRpdGxlLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS50aXRsZVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6ZGVzYy5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uZGVzY1wiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aWQub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLmlkXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY2FyZDogQ2FyZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgbGlzdDogW1xuICAgICAgICAge2lkOiAnYzllN2UzNmM5ZDBlJywgdGl0bGU6ICdBbGxveVRlYW3liY3nq6/lpKfkvJrnmoTmioDmnK/kuIDop4gnLCBkZXNjOidBbGxveVRlYW0gQ29uZuaYr+S4gOS4quW5sui0p+mdnuW4uOmbhuS4reeahOWJjeerr+Wkp+S8muOAgid9LFxuICAgICAgICAge2lkOiAnMjg1OTY4OTRjMzMxJywgdGl0bGU6ICflhaXpl6hCRU0nLCBkZXNjOifkvaDnmoTmoLflvI/nsbvlkI3mmK/mgI7kuYjlkb3lkI3nmoTvvJ8nfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4iXX0=