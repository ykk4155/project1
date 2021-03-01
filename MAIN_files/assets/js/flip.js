
        $(document).ready(function () {
            var flat = $("#flat").flipster({
                style: 'flat',
                spacing: -0.25,
                loop: false,
            });
        
            $("#flat img").click(function(){
                if ($("#flat img").hasClass("active")) {
                    $("#flat img").removeClass("active");
                }
                var clone = $(this).clone();
                if (clone) {
                    $(this).addClass("active");
                }
                if ($("#bigPicture").has("img")) {
                    $("#bigPicture img").remove();
                    clone.appendTo("#bigPicture");
                }
 
            })

        })