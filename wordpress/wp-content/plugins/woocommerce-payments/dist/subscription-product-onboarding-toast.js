!function(){"use strict";var o=window.wp.data,n=window.wp.element,i=window.wp.plugins,e=window.wp.url,r=window.wp.i18n,t=window.wcpaySubscriptionProductOnboardingToast.pluginScope;(0,i.registerPlugin)("wcpay-subscription-product-onboarding-toast",{icon:null,render:function(){var i=(0,o.useDispatch)("core/notices").createInfoNotice;return(0,n.useEffect)((function(){var o;null!==(o=window)&&void 0!==o&&o.history&&window.history.replaceState(null,null,(0,e.removeQueryArgs)(window.location.href,"wcpay-subscriptions-onboarded")),i((0,r.__)("Thank you for setting up WooCommerce Payments! We’ve published your first subscription product.","woocommerce-payments"))}),[i]),null},scope:t})}();