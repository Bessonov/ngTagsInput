'use strict';

/**
 * @ngdoc directive
 * @name tiBindAttrs
 * @module ngTagsInput
 *
 * @description
 * Binds attributes to expressions. Used internally by tagsInput directive.
 */
tagsInput.directive('tiBindAttrs', ['$sniffer', function($sniffer) {
    var typeUnsupported = $sniffer.msie && $sniffer.msie <= 8;
    return function(scope, element, attrs) {
        scope.$watch(attrs.tiBindAttrs, function(value) {
            angular.forEach(value, function(value, key) {
                // ie8 doesn't support setAttribute for type, see
                // https://msdn.microsoft.com/en-us/library/ms534700.aspx
                // so let fallback to "text"
                if (!(key === 'type' && typeUnsupported)) {
                    attrs.$set(key, value);
                }
            });
        }, true);
    };
}]);
