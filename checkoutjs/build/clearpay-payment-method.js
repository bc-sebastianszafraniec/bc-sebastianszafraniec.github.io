"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["clearpay-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/clearpay.js":
/*!************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/clearpay.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClearpayPaymentStrategy: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var i;class n extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class a extends n{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class r extends a{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(i||(i={}));class s extends n{constructor(e){super(function(e){switch(e){case i.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case i.MissingCart:return"Unable to proceed because cart data is unavailable.";case i.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case i.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case i.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case i.MissingCheckoutConfig:case i.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case i.MissingOrder:return"Unable to proceed because order data is unavailable.";case i.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case i.MissingPayment:return"Unable to proceed because payment data is unavailable.";case i.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case i.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case i.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class o extends n{constructor(e){super(e||"The current order could not be finalized successfully"),this.name="OrderFinalizationNotCompletedError",this.type="order_finalization_not_completed"}}var c;!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(c||(c={}));class d extends n{constructor(e){super(function(e){switch(e){case c.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case c.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case c.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case c.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}const u={body:{},headers:{},status:0};class l extends n{constructor(e,{message:t,errors:i}={}){const{body:n,headers:a,status:r}=e||u;super(t||"An unexpected error has occurred."),this.name="RequestError",this.type="request",this.body=n,this.headers=a,this.status=r,this.errors=i||[]}}var p=function(e,t,i,n){return new(i||(i=Promise))(function(a,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function o(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(s,o)}c((n=n.apply(e,t||[])).next())})};class h{constructor(e,t){this._paymentIntegrationService=e,this._clearpayScriptLoader=t}initialize(e){return p(this,void 0,void 0,function*(){const{getPaymentMethodOrThrow:t}=this._paymentIntegrationService.getState(),i=t(e.methodId,e.gatewayId);this._clearpaySdk=yield this._clearpayScriptLoader.load(i)})}deinitialize(){return this._clearpaySdk=void 0,Promise.resolve()}execute(e,i){return p(this,void 0,void 0,function*(){const{gatewayId:n,methodId:s}=e.payment||{};if(!n||!s)throw new r(["payment.gatewayId","payment.methodId"]);const o=this._paymentIntegrationService.getState(),{isStoreCreditApplied:c}=o.getCheckoutOrThrow();yield this._paymentIntegrationService.applyStoreCredit(c),yield this._paymentIntegrationService.validateCheckout(o.getCheckout(),i);const{countryCode:d}=o.getBillingAddressOrThrow();if(!this._isCountrySupported(d))throw new a("Unable to proceed because billing country is not supported.");return yield this._loadPaymentMethod(n,s,i),yield this._redirectToClearpay(d,this._paymentIntegrationService.getState().getPaymentMethod(s,n)),new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)})}finalize(e){var t,n,a;return p(this,void 0,void 0,function*(){const r=this._paymentIntegrationService.getState(),c=r.getPaymentId(),d=r.getContextConfig();if(!c)throw new s(i.MissingCheckout);if(!d||!d.payment.token)throw new s(i.MissingCheckoutConfig);const u={methodId:c.providerId,paymentData:{nonce:d.payment.token}};yield this._paymentIntegrationService.submitOrder({},e);try{yield this._paymentIntegrationService.submitPayment(u)}catch(e){if(yield this._paymentIntegrationService.forgetCheckout(c.providerId),yield this._paymentIntegrationService.loadPaymentMethods(),(e=>"object"==typeof e&&null!==e&&"body"in e)(e))throw new o(null===(a=null===(n=null===(t=e.body)||void 0===t?void 0:t.errors)||void 0===n?void 0:n[0])||void 0===a?void 0:a.message)}})}_redirectToClearpay(e,t){return p(this,void 0,void 0,function*(){if(!this._clearpaySdk||!t||!t.clientToken)throw new d(c.PaymentNotInitialized);return this._clearpaySdk.initialize({countryCode:e}),this._clearpaySdk.redirect({token:t.clientToken}),Promise.resolve()})}_isCountrySupported(e){return"GB"===e}_loadPaymentMethod(e,t,i){var n;return p(this,void 0,void 0,function*(){try{return yield this._paymentIntegrationService.loadPaymentMethod(e,Object.assign(Object.assign({},i),{params:Object.assign(Object.assign({},null==i?void 0:i.params),{method:t})}))}catch(e){if(e instanceof l&&422===(null===(n=e.body)||void 0===n?void 0:n.status))throw new a("Clearpay can't process your payment for this order, please try another payment method");throw e}})}}class y extends n{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class g{constructor(e,t=window){this._scriptLoader=e,this._window=t}load(e){return t=this,i=void 0,a=function*(){if(yield this._scriptLoader.loadScript(this._getScriptUrl(e.config.testMode)),!this._window.AfterPay)throw new y;return this._window.AfterPay},new((n=void 0)||(n=Promise))(function(e,r){function s(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n(function(e){e(i)})).then(s,o)}c((a=a.apply(t,i||[])).next())});// removed by dead control flow
 var t, i, n, a; }_getScriptUrl(e){return e?"//portal.sandbox.clearpay.co.uk/afterpay-async.js":"//portal.clearpay.co.uk/afterpay-async.js"}}const m=(b=t=>new h(t,new g((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)())),v=[{gateway:"clearpay"},{id:"clearpay"}],Object.assign(b,{resolveIds:v}));var b,v;


/***/ }),

/***/ "./packages/clearpay-integration/src/ClearpayPaymentMethod.tsx":
/*!*********************************************************************!*\
  !*** ./packages/clearpay-integration/src/ClearpayPaymentMethod.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/clearpay */ "../checkout-sdk-js/dist/esm/integrations/clearpay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const ClearpayPaymentMethod = (_a) => {
    var { checkoutService, checkoutState, method, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "method", "paymentForm"]);
    console.log('hahaha');
    const initializeClearpayPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_1__.createClearpayPaymentStrategy] }));
    }, [checkoutService]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeClearpayPayment, method: method, paymentForm: paymentForm })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(ClearpayPaymentMethod, [{ gateway: 'clearpay' }]));


/***/ }),

/***/ "./packages/clearpay-integration/src/index.ts":
/*!****************************************************!*\
  !*** ./packages/clearpay-integration/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearpayPaymentMethod: () => (/* reexport safe */ _ClearpayPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ClearpayPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClearpayPaymentMethod */ "./packages/clearpay-integration/src/ClearpayPaymentMethod.tsx");



/***/ }),

/***/ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isAccountInstrument/isAccountInstrument.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/AccountInstrumentFieldset/AccountInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");






function getHostedPaymentMethodDerivedProps(props) {
    const filterAccountInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((instruments = []) => instruments.filter(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"]));
    const filterTrustedInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((instruments = []) => instruments.filter(({ trustedShippingAddress }) => trustedShippingAddress));
    const { checkoutService, checkoutState, isUsingMultiShipping = false, method } = props;
    const { data: { getCart, getConfig, getCustomer, getInstruments, isPaymentDataRequired, isPaymentDataSubmitted, }, statuses: { isLoadingInstruments }, } = checkoutState;
    const cart = getCart();
    const config = getConfig();
    const customer = getCustomer();
    if (!config || !cart || !customer) {
        throw new Error('Unable to get checkout');
    }
    const currentMethodInstruments = filterAccountInstruments(getInstruments(method));
    const trustedInstruments = filterTrustedInstruments(currentMethodInstruments);
    return {
        instruments: trustedInstruments,
        isNewAddress: trustedInstruments.length === 0 && currentMethodInstruments.length > 0,
        isInstrumentFeatureAvailable: !isPaymentDataSubmitted(method.id, method.gateway) &&
            (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])({
                config,
                customer,
                isUsingMultiShipping,
                paymentMethod: method,
            }),
        isLoadingInstruments: isLoadingInstruments(),
        isPaymentDataRequired: isPaymentDataRequired(),
        loadInstruments: checkoutService.loadInstruments,
    };
}
const HostedPaymentMethodComponent = (props) => {
    const { description, isInitializing = false, initializePayment, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, deinitializePayment, } = props;
    const [isAddingNewInstrument, setIsAddingNewInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [selectedInstrument, setSelectedInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const derivedProps = getHostedPaymentMethodDerivedProps(props);
    const { isLoadingInstruments, instruments, isNewAddress, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, loadInstruments, } = derivedProps;
    const getDefaultInstrument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        if (isAddingNewInstrument || !instruments.length) {
            return;
        }
        return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(instruments, { defaultInstrument: true }) || instruments[0];
    }, [isAddingNewInstrument, instruments]);
    const handleUseNewInstrument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        setIsAddingNewInstrument(true);
        setSelectedInstrument(undefined);
    }, []);
    const handleSelectInstrument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((id) => {
        setIsAddingNewInstrument(false);
        setSelectedInstrument((0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(instruments, { bigpayToken: id }));
    }, [instruments]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        const initializePaymentAsync = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                });
                if (isInstrumentFeatureAvailableProp) {
                    yield loadInstruments();
                }
            }
            catch (error) {
                onUnhandledError(error);
            }
        });
        void initializePaymentAsync();
        return () => {
            const deinitializePaymentAsync = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                try {
                    yield deinitializePayment({
                        gatewayId: method.gateway,
                        methodId: method.id,
                    });
                }
                catch (error) {
                    onUnhandledError(error);
                }
            });
            void deinitializePaymentAsync();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const currentSelectedInstrument = selectedInstrument || getDefaultInstrument();
    const isLoading = isInitializing || isLoadingInstruments;
    const shouldShowInstrumentFieldset = isInstrumentFeatureAvailableProp && (instruments.length > 0 || isNewAddress);
    if (!description && !isInstrumentFeatureAvailableProp) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentMethod paymentMethod--hosted" },
            description,
            shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"], { instruments: instruments, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewInstrument, selectedInstrument: currentSelectedInstrument })),
            isInstrumentFeatureAvailableProp && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"], { instrumentId: currentSelectedInstrument && currentSelectedInstrument.bigpayToken, instruments: instruments, isAccountInstrument: true })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedPaymentMethodComponent);


/***/ }),

/***/ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts":
/*!***********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isInstrumentFeatureAvailable)
/* harmony export */ });
function isInstrumentFeatureAvailable({ config, customer, isUsingMultiShipping, paymentMethod, }) {
    if (!config.checkoutSettings.isCardVaultingEnabled ||
        !paymentMethod.config.isVaultingEnabled ||
        customer.isGuest ||
        isUsingMultiShipping) {
        return false;
    }
    return true;
}


/***/ })

}]);
//# sourceMappingURL=clearpay-payment-method.js.map