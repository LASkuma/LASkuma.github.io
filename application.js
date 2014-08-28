$(document).ready(function() {
  var content =   [{
                    q:"减肥的关键时期，有好友请你出去吃大餐畅聊人生的话，你会：",
                    a:"毫不犹豫，吃后再减",
                    b:"前往赴约，多少吃点",
                    c:"只是聊聊，不动筷子",
                    d:"明确告知，换地方聚"
                }, {
                    q:"偶然的一个机会，你知道了同事的小秘密，o(╯□╰)o你会：",
                    a:"马上传播，天下皆知",
                    b:"小范围内，偶尔传播",
                    c:"要挟朋友，偶然玩笑",
                    d:"守口如瓶，如同不知"
                }, {
                    q:"你的前任好久不联系了，突然有天下大雨的时候要你去陪陪ta，你会：",
                    a:"立即前往，风雨无阻",
                    b:"片刻犹豫，保持联系",
                    c:"趁机要挟，开出条件",
                    d:"挂断电话，就此别过"
                }, {
                    q:"领导布置下一个工作任务，要求一周内完成，你会：",
                    a:"卧槽卧槽，还有一天!",
                    b:"持续懒散，临近突击",
                    c:"放松一天，然后开工",
                    d:"立即进行，熬夜完成"
                }, {
                    q:"最近咳嗽的比较厉害，家人建议戒烟，你会：",
                    a:"当面答应，背后继续",
                    b:"坚持两天，复吸三天",
                    c:"尝试戒烟，坚持数月",
                    d:"彻底戒烟，终身不碰"
                }];
  var answer =  [{
    name: "放任自流型",
    description: "你说你的，我做我的。自制力神马的都是浮云，爽一把才是王道。你这种人不能碰毒品，否则一定万劫不复。"
  }, {
    name: "残存良知型",
    description: "你还有那么一丢丢的自制力存在，当然也仅仅是那么一丢丢。平淡无奇的诱惑或许还可以把持住自己，遇到强大对手注定马上沦陷。比如毒品，美色。",
  }, {
    name: "明辨是非型",
    description: "普通人类，不是伪君子也不是假小人。会分辨利弊，会抵御一般诱惑，但面对也只是摇摆不定。你明白毒品的害处，很想尝试，但千万别碰，因为一旦染上也戒不掉。",
  }, {
    name: "超强克制型",
    description: "你的自制力超越一般大众，能够分辨利害关系，能够顺利强迫自己去沿着正确方向行走。暂且不论戒毒与否，想让你染毒，本来就是难题。",
  }, {
    name: "真的会有吗？",
    description: "你确定是如实回答的？不许作弊哦！不做分析了，如果有人真的有这样强的自制力再说好吗？",
  }]
  var currentQ = 0;
  var score = 0;


 render(content[currentQ]);

  $(".choice").click(function() {
    var choice = $(this).attr("id");
    if (choice === "A") {
      score += 1;
    }
    if (choice === "B") {
      score += 2;
    }
    if (choice === "C") {
      score += 3;
    }
    if (choice === "D") {
      score += 4;
    }

    currentQ++;
    if (currentQ < 5) {
      next(content[currentQ], 400);
    } else {
      var result = 0;
      if(score > 0 && score < 6) {
        result = 0;
      } else if(score < 11) {
        result = 1;
      } else if(score < 16) {
        result = 2;
      } else if(score < 20) {
        result = 3;
      } else {
        result = 4;
      }
      changeResult(answer[result]);
      $(".dialog").fadeIn();
    }
  });
});

function render(question) {
  $(".question h1").html(question.q);
  $("#A span").html(question.a);
  $("#B span").html(question.b);
  $("#C span").html(question.c);
  $("#D span").html(question.d);
}

function next(question, speed) {
  $(".question h1").fadeOut(speed, function() {
    $(this).html(question.q).fadeIn(speed);
  });
  $("#A span").fadeOut(speed, function() {
    $(this).html(question.a).fadeIn(speed);
  });
  $("#B span").fadeOut(speed, function() {
    $(this).html(question.b).fadeIn(speed);
  });
  $("#C span").fadeOut(speed, function() {
    $(this).html(question.c).fadeIn(speed);
  });
  $("#D span").fadeOut(speed, function() {
    $(this).html(question.d).fadeIn(speed);
  });
}

function changeResult(answer) {
  $(".dialog div h2").html(answer.name);
  $(".dialog div h3").html(answer.description);
}
