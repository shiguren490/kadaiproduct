jQuery(function ($) {
    $(document).ready(function () {
        $('.slider').slick({
            dots: true, // スライダー下部に表示される、ドット状のページネーションです
            infinite: true, // 無限ループ
            speed: 300, // 切り替わりのスピード
            slidesToShow: 4, //通常 1024px以上の領域では4画像表示
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: { //601px～1024pxでは3画像表示
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
		},
                {
                    breakpoint: 600,
                    settings: { //481px～600pxでは2画像表示
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
		},
                {
                    breakpoint: 480,
                    settings: { //480px以下では1画像表示
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
		}]
        });
    });
});
