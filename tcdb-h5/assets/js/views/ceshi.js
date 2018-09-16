define(
    [
        'zepto', 'jquery', 'underscore', 'backbone', 'urlGroup',
        'swiper', 'echo', 'app/api', 'app/basket',
        'app/utils', 'app/scroll',
        'text!templates/ceshi.html'
    ],

    function ($, Jquery, _, Backbone, UrlGroup, Swiper, echo, Api, basket, utils, scroll,
              ceshi) {

        var $page = $("#fuckCeshi");

        var ceshiView = Backbone.View.extend({
            el: $page,
            render: function () {
                utils.showPage($page, function () {
                    $page.empty().append(ceshi);
                });
            },
        })
        return ceshiView;
    });
