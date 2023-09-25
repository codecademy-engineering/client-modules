function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function CodecademyProMonoLogo(props) {
  return /*#__PURE__*/_jsxs("svg", _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 139 22",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("title", {
      children: "Codecademy Pro Logo"
    }), /*#__PURE__*/_jsxs("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/_jsx("path", {
        transform: "translate(103.55 7.744)",
        d: "M29.824 0c2.639 0 4.758 1.963 4.758 4.706 0 2.743-2.119 4.706-4.758 4.706s-4.758-1.963-4.758-4.706C25.066 1.963 27.185 0 29.824 0zm0 7.748c1.716 0 2.873-1.3 2.873-3.042 0-1.742-1.157-3.042-2.873-3.042-1.716 0-2.873 1.3-2.873 3.042 0 1.742 1.157 3.042 2.873 3.042zM20.618.156c1.989 0 3.159 1.183 3.159 2.769 0 .858-.351 1.95-1.729 2.496l2.327 3.835h-2.08L20.28 5.759h-1.274v3.497h-1.807v-9.1h3.419zm-15.383 0l-3.175 9.1H0l3.176-9.1h2.06zm6.945 0c2.145 0 3.276 1.339 3.276 2.99 0 1.638-1.131 3.029-3.276 3.029h-1.287v3.081H9.099v-9.1h3.081zm-.273 1.56h-1.014v2.912h1.014c.988 0 1.703-.468 1.703-1.482s-.715-1.43-1.703-1.43zm8.477 0h-1.378v2.47h1.378c1.001 0 1.586-.468 1.586-1.248 0-.806-.585-1.222-1.586-1.222z",
        fill: "currentColor"
      }), /*#__PURE__*/_jsx("path", {
        d: "M4.213 14.896c-.192-.562-.278-1.275-.278-2.226 0-.95.086-1.664.278-2.226.513-1.599 1.86-2.485 3.637-2.485 1.326 0 2.353.54 3.06 1.404a.18.18 0 01-.022.26L9.732 10.66c-.086.066-.192.066-.256-.043-.45-.497-.9-.778-1.626-.778-.792 0-1.39.39-1.648 1.167-.128.454-.17.973-.17 1.664 0 .692.042 1.232.192 1.686.257.756.856 1.167 1.647 1.167.727 0 1.198-.28 1.626-.778.064-.086.171-.086.257-.022l1.155 1.038c.086.065.064.173.022.26-.707.842-1.734 1.382-3.06 1.382-1.775-.021-3.145-.886-3.658-2.507zm39.704 0c-.192-.562-.278-1.275-.278-2.226 0-.95.086-1.664.278-2.226.514-1.599 1.862-2.485 3.637-2.485 1.326 0 2.375.54 3.06 1.404a.18.18 0 01-.022.26l-1.155 1.037c-.086.066-.193.066-.257-.043-.45-.497-.899-.778-1.626-.778-.791 0-1.39.39-1.647 1.167-.15.454-.193.973-.193 1.664 0 .692.043 1.232.193 1.686.257.756.856 1.167 1.647 1.167.727 0 1.198-.28 1.626-.778.064-.086.171-.086.257-.022l1.155 1.038c.086.065.064.173.022.26-.707.842-1.734 1.382-3.06 1.382-1.775-.021-3.123-.886-3.637-2.507zm46.552 2.27c-.107 0-.192-.066-.192-.195v-5.187c0-1.167-.578-1.967-1.67-1.967-1.069 0-1.69.8-1.69 1.967v5.187c0 .108-.064.195-.192.195h-1.69c-.107 0-.192-.066-.192-.195v-5.187c0-1.167-.578-1.967-1.67-1.967-1.069 0-1.69.8-1.69 1.967v5.187c0 .108-.063.195-.192.195h-1.69c-.107 0-.192-.066-.192-.195V8.348c0-.108.064-.195.192-.195h1.69c.107 0 .193.065.193.195v.648h.021c.385-.562 1.155-1.037 2.332-1.037 1.048 0 1.883.432 2.418 1.189h.021c.684-.757 1.562-1.19 2.824-1.19 2.054 0 3.209 1.427 3.209 3.35v5.685c0 .108-.064.194-.193.194l-1.647-.021zm4.228 3.177c-.108 0-.193-.066-.193-.195v-1.491c0-.108.064-.194.193-.194h.32c.707 0 1.048-.325 1.327-1.06l.257-.756-3.231-8.494c-.043-.108.043-.194.15-.194h1.818c.107 0 .193.065.214.194l1.99 5.879h.043l1.904-5.879c.043-.108.107-.194.213-.194h1.733c.108 0 .193.065.15.194l-3.337 9.401c-.77 2.14-1.498 2.81-2.974 2.81l-.577-.021zm-76.93-6.009c.15-.475.192-.908.192-1.664 0-.756-.043-1.167-.192-1.664-.257-.757-.835-1.167-1.647-1.167-.813 0-1.412.432-1.669 1.167-.15.475-.193.886-.193 1.664 0 .756.043 1.189.193 1.664.257.757.835 1.167 1.669 1.167.812.022 1.39-.41 1.647-1.167zm-5.306.562c-.192-.627-.3-1.232-.3-2.226s.087-1.578.3-2.226c.492-1.578 1.84-2.485 3.637-2.485 1.776 0 3.124.907 3.615 2.485.193.627.3 1.232.3 2.226s-.086 1.578-.3 2.226c-.491 1.578-1.84 2.485-3.615 2.485-1.775 0-3.123-.907-3.637-2.485zm43.085-6.937c2.695 0 3.68.95 3.722 3.155v5.857c0 .13-.085.195-.192.195h-1.54c-.13 0-.193-.087-.193-.195v-.648h-.022c-.406.605-1.24 1.037-2.481 1.037-1.626 0-2.974-.865-2.974-2.745 0-1.945 1.348-2.853 3.53-2.853h.728c.128 0 .192.087.192.195v1.189c0 .13-.086.194-.192.194h-.407c-1.327 0-1.904.368-1.904 1.21 0 .757.535 1.124 1.519 1.124 1.262 0 1.968-.497 1.968-1.534v-3.004c-.043-.973-.535-1.405-1.968-1.405-.984 0-1.583.281-2.011.627-.086.064-.193.043-.257-.043l-.685-1.233c-.042-.086-.021-.172.043-.237.706-.54 1.67-.886 3.124-.886zm-21.66 3.803h2.502c.065 0 .108-.043.108-.108 0-.302-.043-.54-.108-.756-.235-.735-.877-1.167-1.711-1.167-.834 0-1.498.432-1.733 1.167-.021.087-.043.173-.064.28v.044c-.064.41-.086.735-.107 1.254-.003.434.033.868.107 1.296.021.13.064.26.107.39.278.885.984 1.361 1.968 1.361 1.006 0 1.626-.367 2.075-.864.086-.109.193-.109.278-.044l1.07.973c.086.065.086.173.021.26-.77.907-2.01 1.534-3.636 1.534-1.862 0-3.188-.93-3.68-2.507-.193-.584-.321-1.276-.321-2.205 0-.93.107-1.642.3-2.226.492-1.577 1.86-2.485 3.615-2.485 1.818 0 3.145.95 3.637 2.485.214.627.3 1.254.3 2.702 0 .13-.065.194-.193.194h-4.536c-.064 0-.085-.043-.085-.086v-1.405c0-.065.043-.087.085-.087zm-4.83-7.42c.107 0 .193.064.214.107v12.319c0 .13-.085.195-.192.195h-1.69c-.128 0-.193-.087-.193-.195v-.67h-.021c-.407.605-1.134 1.06-2.332 1.06-1.498 0-2.61-.714-3.06-2.162-.234-.692-.32-1.319-.32-2.529s.107-1.837.32-2.528c.45-1.427 1.52-2.14 2.996-2.161h1.262c.043.02.064.043.064.086v1.707c0 .044-.021.087-.064.087h-.727c-.792.021-1.348.432-1.583 1.167-.129.41-.193.864-.193 1.685 0 .822.064 1.276.193 1.686.235.735.812 1.146 1.625 1.146.835 0 1.412-.39 1.648-1.146a4.85 4.85 0 00.171-1.167V4.536c0-.13.085-.195.192-.195h1.69zm44.176 7.42h2.503c.064 0 .107-.043.107-.108 0-.302-.043-.54-.107-.756-.235-.735-.877-1.167-1.712-1.167-.834 0-1.497.432-1.732 1.167a5.779 5.779 0 00-.064.28v.044c-.064.41-.086.735-.107 1.254-.003.434.033.868.106 1.296.022.13.065.26.108.39.278.885.984 1.361 1.968 1.361 1.006 0 1.626-.367 2.075-.864.086-.109.193-.109.278-.044l1.07.973c.085.065.085.173.021.26-.77.907-2.011 1.534-3.637 1.534-1.86 0-3.187-.93-3.68-2.507-.192-.584-.32-1.276-.32-2.205 0-.93.107-1.642.3-2.226.491-1.577 1.86-2.485 3.614-2.485 1.819 0 3.145.95 3.638 2.485.213.627.3 1.254.3 2.702 0 .13-.065.194-.193.194h-4.536c-.064 0-.086-.043-.086-.086v-1.405c0-.065.043-.087.086-.087zm-4.829-7.42c.107 0 .193.064.236.172v12.319c0 .13-.086.194-.193.194h-1.69c-.128 0-.192-.086-.192-.194v-.67h-.022c-.428.605-1.155 1.059-2.353 1.059-1.498 0-2.61-.713-3.06-2.161-.235-.692-.32-1.34-.32-2.55 0-1.232.107-1.86.32-2.551.45-1.426 1.54-2.14 3.017-2.161h1.24c.129 0 .193.086.193.194v1.492c0 .13-.085.194-.192.194h-.727c-.792.022-1.349.433-1.584 1.167-.128.41-.192.865-.192 1.686s.064 1.275.192 1.686c.235.756.792 1.167 1.626 1.167.835 0 1.412-.41 1.648-1.167.085-.302.15-.649.17-1.167V4.536c0-.13.086-.195.193-.195h1.69zM50.078 19.534c.295 0 .357.09.357.362v1.447c0 .294-.083.362-.357.362h-5.723c-.296 0-.358-.09-.358-.362v-1.447c0-.295.052-.362.358-.362h5.723zM0 .362C0 .109.043.043 0 0h42.208c.23 0 .272.022.358 0v21.344c0 .231-.021.275 0 .362-.086-.022-.129 0-.358 0H0v-.002l.007-.028c.006-.037-.002-.053-.006-.012L0 21.69V.361zm2.146 19.173H40.42c-.043-.043 0-.107 0-.362V2.171H2.146v17.364z",
        fill: "currentColor"
      })]
    })]
  }));
}