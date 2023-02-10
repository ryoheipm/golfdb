//-----初期設定
function initFunc(){
    selectArray = [-1,-1];
    scoreArray = [0,0,];
    qNum = selectArray.length;
}
    //-----画像のプリロード
    function preloadFunc() {
        for(var i = 0; i< arguments.length; i++){
            $("<img>").attr("src", arguments[i]);
        }
    }

	//-----もう１度ボタンの処理
	function againFunc(){
            initFunc();//---初期化
	}
    
    function quesFunc(){
        var idArray = this.id.split("_");
        var qID = Number(idArray[0]);
        var ansID = Number(idArray[1]);
        var selectID = selectArray[qID];
        if (ansID == selectID) return;
        $("#" + qID + "_" + ansID).addClass("selected");
        $("#" + qID + "_" + selectID).removeClass("selected");
        selectArray[qID] = ansID;
        moveFunc(qID);//---移動処理
        scoreArray[qID] =  Number($(this).attr("sc"));
        
        if (qID+1 >= qNum) resultFunc();//---最後の質問かをチェック
    }

    function moveFunc(vol){
        var myPos = (vol+1) * -650;
        $("#qContainer").delay(500).animate({left: myPos},500);
    }

    //---結果の処理
    function resultFunc(){
        var totalScore = 0;
        for(var i in scoreArray){
	    totalScore += scoreArray[i];
        }
        switch (true){
            case totalScore == 11:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result11.html");
                break;
            case totalScore == 12:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result12.html");
                break;
            case totalScore == 13:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result13.html");
                break;
            case totalScore == 21:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result21.html");
                break;
            case totalScore == 22:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result22.html");
                break;
            case totalScore == 23:
                $(".start").attr("href", "hhttps://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result23.html");
                break;
            case totalScore == 31:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result31.html");
                break;
            case totalScore == 32:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result32.html");
                break;
            default:
                $(".start").attr("href", "https://ryoheipm.github.io/golfdb/golfdogdb/temp/html/result33.html");
        }
    }
        


    $(function(){
        initFunc();//---初期化
        $(".select").click(quesFunc);//---回答処理
        //テキストデータの読込
        $.get("/static/javascript/result.csv", function(myData){
            resultArray = myData.split("\r\n");
        });
         //画像のプリロード
        preloadFunc("/static/css/images/lv0.png","/static/css/images/lv1.png","/static/css/images/lv2.png","/static/css/images/lv3.png","/static/css/images/lv4.png", "/static/css/images/againOn.png");
        $(".againButton").click(againFunc);//---もう一度ボタン
    });


