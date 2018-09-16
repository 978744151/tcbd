define(['zepto', 'underscore', 'backbone',
        'swiper', 'echo','app/api', 'app/refreshtoken',
        'app/utils',
        'text!templates/language.html'
    ],

    function($, _, Backbone, Swiper, echo, Api, Token, utils, myTemplate) {

        var $page = $("#main-language");
        var type =1;//需要先判断是否登陆
        var $categoryList;
        var $usserInfoContaniter;
        var $userInfoItem;
        var imageRenderToken = null;
        var languageView = Backbone.View.extend({
            el: $page,
            render: function (id, name) {

            },
        })


        return languageView;
    });
