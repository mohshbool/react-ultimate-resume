"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtherExperienceYears = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var OtherExperienceYears = function OtherExperienceYears(_ref) {
  var codeExperienceYears = _ref.codeExperienceYears,
      otherExperienceYears = _ref.otherExperienceYears;
  var otherExperienceValue = (0, _react.useMemo)(function () {
    var numberValue = Number(otherExperienceYears);

    if (Number.isNaN(numberValue)) {
      return 0;
    }

    return numberValue;
  }, [otherExperienceYears]);

  if (!otherExperienceValue || Number.isNaN(Number(codeExperienceYears))) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.OtherExperienceYear.value",
    defaultMessage: ' and {otherExperienceValue, plural, one {# year} other {# years} } of other work experiences',
    values: {
      otherExperienceValue: otherExperienceValue
    }
  });
};

exports.OtherExperienceYears = OtherExperienceYears;