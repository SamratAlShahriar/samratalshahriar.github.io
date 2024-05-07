<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image Gallery sas.info.bd</title>

    <style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #333;
  height: 100vh;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(0deg);
  transition: transform 0.7s;
}

.image-container span {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  transform: rotateY(calc(var(--i) * 30deg)) translateZ(400px);
}

.image-container span img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-wrapper {
  position: relative;
  width: 80%;
}

.btn {
  position: absolute;
  bottom: -80px;
  background: crimson;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 05px;
  cursor: pointer;
}

.btn:hover {
  filter: brightness(1.5);
}

#prev {
  left: 0%;
}

#next {
  right: 0%;
}
    </style>
  </head>
  <body>
  <div class="image-container">
      <span style="--i: 1">
        <img src="samrat al shahriar convocation diu.jpg" alt="samrat al shahriar convocation diu" />
      </span>
      <span style="--i: 2">
        <img src="samrat al shahriar colorful.png" alt="samrat al shahriar colorful" />
      </span>
      <span style="--i: 3">
        <img src="samrat al shahriar guiter 1.png" alt="samrat al shahriar guiter" />
      </span>
      <span style="--i: 4">
        <img src="samrat al shahriar guiter 2.png" alt="samrat al shahriar guiter" />
      </span>
      <span style="--i: 5">
        <img src="samrat al shahriar guiter winter.png" alt="samrat al shahriar guiter winter" />
      </span>
      <span style="--i: 6">
        <img src="samrat al shahriar hair.png" alt="samrat al shahriar hair" />
      </span>
      <span style="--i: 7">
        <img src="samrat al shahriar in mahamaya lake.png" alt="samrat al shahriar in mahamaya lake" />
      </span>
      <span style="--i: 8">
        <img src="samrat al shahriar morph 2.png" alt="samrat al shahriar morph" />
      </span>
      <span style="--i: 9">
        <img src="samrat al shahriar repair.jpg" alt="samrat al shahriar repair" />
      </span>
      <span style="--i: 10">
        <img src="samrat al shariar guiter outside.png" alt="samrat al shariar guiter outside" />
      </span>
      <span style="--i: 11">
        <img src="samrat al shariar morph.png" alt="samrat al shariar morph" />
      </span>
      <span style="--i: 12">
        <img src="samrat mahamaya lake.png" alt="samrat al shariar morph" />
      </span>
    </div>
    <!-- Button Container -->
    <div class="btn-wrapper">
      <button class="btn" id="prev">Prev</button>
      <button class="btn" id="next">Next</button>
    </div>
    <script>
      const imgcontainer = document.querySelector(".image-container");
      const prev = document.getElementById("prev");
      const next = document.getElementById("next");

      let a = 0;
      let timeout;

      prev.addEventListener("click", () => {
        a = a + 30;
        clearTimeout(timeout);
        updategellary();
      });

      next.addEventListener("click", () => {
        a = a - 30;
          clearTimeout(timeout);
        updategellary();
      });

      function updategellary() {
        imgcontainer.style.transform = `perspective(1000px) rotateY(${a}deg)`;
        timeout=setTimeout(() => {
          a = a - 30;

          updategellary();
        }, 4000);
      }
      updategellary();
    </script>
  </body>

  
</html>