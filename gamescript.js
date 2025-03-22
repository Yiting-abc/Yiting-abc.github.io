window.onload = function(){
  game = document.getElementById("game");
  level = document.getElementById("level");

  document.getElementById("StartButton").style.display = "inline-block";

  document.getElementById("StartButton").addEventListener("click", function() {
        this.style.display = "none";
        document.getElementById("nameForm").style.display = "block";
    });
  document.getElementById("nameInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            submitName();
        }
      });
}
function submitName(){
  const name = document.getElementById("nameInput").value.trim();
  if(name){
    document.getElementById("nameForm").style.display = "none";

    window.alert("你好啊，" + name + "！欢迎来到我的游戏，点击下面的按钮开始吧！");
    document.getElementById("playButton").style.display = "inline-block";
    localStorage.setItem("playerName", name);
  };
  document.getElementById("playButton").addEventListener("click", function() {
            document.getElementById("game").style.display = "block";
            this.style.display = "none";
        });
}

//youxi
let activeBox = null; // 当前激活的方块
const speedMap = { slow: 5, fast: 15 };

//激活方块
document.addEventListener('keydown', (e) => {
  if (e.key === 'o') {
    activeBox = document.querySelector('#box1');
  } else if (e.key === 'g') {
    activeBox = document.querySelector('#box2');
  }else if (e.key === 'v') {
    activeBox = document.querySelector('#box3');
  }else if (e.key === 'b') {
    activeBox = document.querySelector('#box4');
  }else if (e.key === 'p') {
    activeBox = document.querySelector('#box5');
  }
  if (!activeBox) return;

  const speed = e.shiftKey ? speedMap.fast : speedMap.slow;
  const currentX = activeBox.offsetLeft;
  const currentY = activeBox.offsetTop;

  switch(e.key) {
    case 'ArrowLeft':
      if (currentX > 0) activeBox.style.left = `${currentX - speed}px`;
      break;
    case 'ArrowUp':
      if (currentY > 0) activeBox.style.top = `${currentY - speed}px`;
      break;
    case 'ArrowRight':
      if (currentX < 750) activeBox.style.left = `${currentX + speed}px`;
      break;
    case 'ArrowDown':
      if (currentY < 300) activeBox.style.top = `${currentY + speed}px`;
      break;
  }
});

function sayHello(){
  window.alert("你可以通过键盘上的箭头移动颜色较深的方块，但前提是要先点击方块所对应的字母:b！蓝色;o！橘色;v！紫色;p！粉色;g！绿色,将方块移动到对应位置后点击右下角的完成按钮")
}

document.querySelectorAll('#box')

const targetPositions = {
 box1: { x: 310, y: 150 },
 box2: { x: 370, y: 150 },
 box3: { x: 490, y: 150 },
 box4: { x: 250, y: 150 },
 box5: { x: 430, y: 150 },

};
document.getElementById('fanishButton').addEventListener('click', () => {
 const allInPosition = Array.from(document.querySelectorAll('#box1,#box2,#box3,#box4,#box5')).every(box => {
   const TOLERANCE = 5
   const currentX = box.offsetLeft;
   const currentY = box.offsetTop;
   const target = targetPositions[box.id];
   return (
      Math.abs(box.offsetLeft - target.x) <= TOLERANCE &&
      Math.abs(box.offsetTop - target.y) <= TOLERANCE
    );
   return currentX === target.x && currentY === target.y;
 });


   if (allInPosition) {
       document.getElementById("game").style.display = "none";
       document.getElementById('successMessage').style.display = 'block';
       activeBox = null;
     } else {
       alert('还有方块未到达指定位置！');
     }
   });
