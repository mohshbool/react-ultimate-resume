"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeExperienceYears = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var CodeExperienceYears = function CodeExperienceYears(_ref) {
  var experienceYears = _ref.experienceYears,
      codeExperienceYears = _ref.codeExperienceYears;
  var codeExperienceValue = (0, _react.useMemo)(function () {
    var numberValue = Number(codeExperienceYears);

    if (Number.isNaN(numberValue)) {
      return 0;
    }

    return numberValue;
  }, [codeExperienceYears]);

  if (!Number.isNaN(Number(experienceYears)) && Number.isNaN(Number(codeExperienceYears))) {
    console.warn('experienceYears is deprecated, please use codeExperienceYears and otherExperienceYears');
    return null;
  }

  if (codeExperienceValue === 0) {
    return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.CodeExperienceYear.noExperience",
      defaultMessage: 'No experience (yet!) as a developer'
    });
  }

  return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.CodeExperienceYear.value",
    defaultMessage: "{codeExperienceYears, plural, one {# year} other {# years} } of work experience as developer",
    values: {
      codeExperienceYears: codeExperienceYears
    }
  });
};

exports.CodeExperienceYears = CodeExperienceYears;