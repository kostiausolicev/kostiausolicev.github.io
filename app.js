let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

tg.MainButton.setText("Changed Text");
tg.MainButton.enable()
tg.MainButton.show()

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData("some string that we need to send");
});
