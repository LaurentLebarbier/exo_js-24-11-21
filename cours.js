class Btn{
    text;
    textColor;
    bgColor;

     constructor(text, textColor, bgColor){
         this.text = text;
         this.textColor = textColor;
         this.bgColor = bgColor;

         }
     get #text(){
        return this.#text;
    }
    set #text(text){
        this.#text = text;
    }

    generate(){
        let html = '<button style="color:${this.#textColor}; background-color:${this.#bgColor};">${this.#text}</button>';
        return html;
    }
 }

 
 const myBtn = new Btn('Cliquez moi', "white", "black");
 console.log(myBtn.text );
 myBtn.text = 'Poussez moi !';
 console.log(myBtn.text );
 document.body.innerHTML= myBtn.generate();