var cb = function () {
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = '';
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame; if (raf) raf(cb);
else window.addEventListener('load', cb);

var JSiteVersion = '2.0';
var JsiteCDN = 'https://ion.r2net.com/';
reactOnlyDomain = 'http://jaweb.srv.r2net.com/'; jAProxyProtocolAndDomain = 'https://www.jamesallen.com/'; isFromJAProxy = 'True' === 'False'; jSiteOldDomain = 'https://www.jamesallen.com/'; JsiteWww = 'https://www.jamesallen.com/'; JsiteScr = 'https://www.jamesallen.com/'; FeatureSupport = { 'ActiveCampaign': 'PreBF21x3', 'TopBannerCampaign': 'PreBF21x3', 'SpecialGalleriesBanner': '1', 'Metallica': 'NothingElseMatters', 'JACoupon': 'preblack2021', 'ShowJewelSalePrice': '1', 'ShowStoneSalePrice': '1', 'ShowPromotionBanner': 'True', 'StonesGalleryPromotion': '1', 'LabPromo': '1', 'ShoppingCartActiveCampaign': 'None', 'ShowJewelRibbons': '1', 'ShowDiamondRibbons': '1', 'Jamus': '1', 'Donation': 'None', 'ByFastShipping': '1', 'ByFastShippingStones': '1', 'ByValentines': '0', 'ByValentinesStones': '0', 'ByXmas': '0', 'ByXmasStones': '0', 'ByNewYears': '0', 'ByNewYearsStones': '0', 'IsStore': 'False', 'UsTaxes': 'Regular', 'InventoryShipping': '1', 'GameOfClues': '1', 'Gift100': 'CheckoutGift-Disabled', 'JewelItemPreview': '', 'Stats': '1', 'JSiteV': 'http2-3p', 'miniVer': '126', 'ResourcesMiniVer': '004', 'ja-player': '0', 'R2PlayerFeature': '1', 'version': '2-3-697', 'CosultationIonHost': 'ioncs.r2net.com', 'ConsultationIonHost': 'ioncs.r2net.com', 'ConsultationHost': 'cs.r2net.com', 'EnableMobileConsultation': '1', 'SplitIt': '1', 'JAPari': '1', 'BinaryDirect': '', 'PlayerDisplayMode': 'BinaryFirst', 'DiamondStudsGallery': 'gallery', 'IsExpressShipping': '0', 'CloseService': 'False', 'Diamond4k': '0', 'NewTaxEnabled': '0', 'GalleryFilters': '1', 'NewGallery': '1', 'NewFunnel': '0', 'LazyLoadHomepage': 'True', 'StudsOtherQuality': '1', 'ScriptsAtEnd': '1', 'Namogoo': '0', 'HomePageBannerGifDisplay': '0', 'UseLocalData': '1', 'ReactMobileHeader': '0', 'InspirationItemPage': '1', 'MobileHomePageRing': '1', 'SiteMapPage': '0', 'MobileItemPageReactNewUI_FS': '1', 'DeepGrading': '0', 'EyeClean': '0', 'MyAccountMobile': '1', 'InStoreFeature': '1', 'ShowBreadCrumbs': '1', 'NewSearchFeature': '1', 'EarthOrNatural': 'Earth-Created', 'InventoryDateFilterFeature': '1', 'PrevNextItem': '0', 'DisableTagManagerCheckout': '0', 'ExtendedReturns': '0', 'DropdownXmasDate': '2020-12-23', 'DropdownNewYears': '2020-12-30', 'DropdownValentinesDate': '2021-02-12', 'NewLoginPage': '1', 'NewDesignLoginPage': '1', 'JPayType': 'iframe', 'MobileGemstonesProductServiceSearch': '1', 'CarePlan': '0', 'NewConsultButtonMobile': '1', 'NewConsultButtonDesktop': '1', 'MobileLooseDiamondsQLFeature': '1', 'DesktopLooseDiamondsQLFeature': '1', 'DesktopFancyColorQLFeature': '1', 'MobileFancyColorQLFeature': '1', 'QuickMobileJewelItemPage': '1', 'NewMobileEngagementRingsItemPage': '1', 'NewMobileStudsDYOItemPage': '1', 'NewMobilePendantDYOItemPage': '1', 'NewMobileGemstoneItemPage': '1', 'NewDesktopDiamondItemPage': '1', 'NewDesktopGemstoneItemPage': '1', 'NewCertPopupGemstone': '1', 'NewDesktopDiamondPairsItemPage': '1', 'NewMobileDiamondPairItemPage': '1', 'NewDesktopGemstonePairsItemPage': '1', 'NewMobileGemstonePairItemPage': '1', 'NewFinancingPage': '1', 'covid19': '0', 'covidNY': '0', 'fasterShipping': '0', 'hideShippingDates': '0', 'ActivePigeonService': '0', 'HintIt': '1', 'ResetPasswordNew': '1', 'WishListReact': '1', 'EternitySpecialGalleryFeature': '1', 'SubDomain': 'www', 'ShoppingCartReact': '1', 'NewMobileShoppingCart': '1', 'UpgradeDiamondsFeature': '1', 'GlobalTaxes': '1', 'Babenu': '1', 'TaxCalculatorFedEx': '1', 'AlternativeDiamondsFeature': '1', 'CheckoutMS': '0', 'DropHintGif': '1', 'NewCompleteRingPage': '0', 'SplitIt6': '1' }; var JSiteScriptsLoaded = 0;
var JSiteExpectedScripts = 6;
var dataAkamai = 'country_code=US,region_code=WA,city=SEATTLE,continent=NA';
var isInternetExplorer = 'False';
function scriptLoaded() {

    JSiteScriptsLoaded++;
    if (JSiteScriptsLoaded == JSiteExpectedScripts)
        JSiteInit();
};

window.JSite = window.JSite || {}; JSite.PageData = JSite.PageData || {};
function JSiteInit() {

    JSite.Hijax.Manager.PageKey = '/';
    JSite.Hijax.Manager.DisableBackScroll = '';
    JSite.Hijax.Manager.XslFeatureSupportKeys = 'ActiveCampaign,TopBannerCampaign,Metallica,JACoupon,StonesGalleryPromotion,ShoppingCartActiveCampaign,ShowJewelRibbons,ShowDiamondRibbons,Donation,ByFastShipping,ByFastShippingStones,ByValentines,ByValentinesStones,ByXmas,ByXmasStones,ByNewYears,ByNewYearsStones,IsStore,UsTaxes,InventoryShipping,GameOfClues,Gift100,SplitIt,JAPari,BinaryDirect,PlayerDisplayMode,DiamondStudsGallery,IsExpressShipping,CloseService,Diamond4k,NewTaxEnabled,GalleryFilters,NewGallery,NewFunnel,LazyLoadHomepage,StudsOtherQuality,ScriptsAtEnd,HomePageBannerGifDisplay,UseLocalData,ReactMobileHeader,InspirationItemPage,MobileHomePageRing,SiteMapPage,MobileItemPageReactNewUI_FS,DeepGrading,EyeClean,MyAccountMobile,InStoreFeature,ShowBreadCrumbs,EarthOrNatural,InventoryDateFilterFeature,PrevNextItem,DisableTagManagerCheckout,ExtendedReturns,DropdownXmasDate,DropdownNewYears,DropdownValentinesDate,JPayType,MobileGemstonesProductServiceSearch,CarePlan,MobileLooseDiamondsQLFeature,DesktopLooseDiamondsQLFeature,DesktopFancyColorQLFeature,MobileFancyColorQLFeature,QuickMobileJewelItemPage,hideShippingDates,ActivePigeonService,HintIt,ResetPasswordNew,WishListReact,EternitySpecialGalleryFeature,SubDomain,ShoppingCartReact,NewMobileShoppingCart,UpgradeDiamondsFeature,GlobalTaxes,AlternativeDiamondsFeature,CheckoutMS,NewCompleteRingPage,SplitIt6'


    JamesAllen.Main.InitMain();; window.RenderDesktopHomePage();;
};
window.renderBadge = function () {
    var ratingBadgeContainer = document.createElement('div');
    document.body.appendChild(ratingBadgeContainer);
    window.gapi.load('ratingbadge', function () {
        window.gapi.ratingbadge.render(
            ratingBadgeContainer, {
            // REQUIRED
            'merchant_id': 361782,
            // OPTIONAL
            'position': 'BOTTOM_LEFT'
        });
    });
}

window.___gcfg = {
    lang: 'en_US'
};
(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-WN28TP');

