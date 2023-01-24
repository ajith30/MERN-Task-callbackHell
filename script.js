const message = document.getElementById("msg");
console.log(message);
let counter = 10;

message.textContent = counter;
setTimeout(() => {
  message.textContent = counter--;
  setTimeout(() => {
    message.textContent = counter--;
    setTimeout(() => {
      message.textContent = counter--;
      setTimeout(() => {
        message.textContent = counter--;
        setTimeout(() => {
          message.textContent = counter--;
          setTimeout(() => {
            message.textContent = counter--;
            setTimeout(() => {
              message.textContent = counter--;
              setTimeout(() => {
                message.textContent = counter--;
                setTimeout(() => {
                  message.textContent = counter--;
                  setTimeout(() => {
                    message.textContent = counter--;
                    setTimeout(() => {
                      message.textContent = "Happy Independence Day !!!!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
