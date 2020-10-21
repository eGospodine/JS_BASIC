function solve (input) {
    let change = Number(input.shift());
    let stotinki = change * 100;

    let countStotinki = 0;

    while (stotinki > 0) {
        
        if (stotinki >= 200) {
            countStotinki++;
            stotinki -= 200;
        } else if (stotinki >= 100) {
            countStotinki++;
            stotinki -= 100;
        } else if (stotinki >= 50) {
            countStotinki++;
            stotinki -= 50;
        } else if (stotinki >= 20) {
            countStotinki++;
            stotinki -= 20;
        } else if (stotinki >= 10) {
            countStotinki++;
            stotinki -= 10;
        } else if (stotinki >= 5) {
            countStotinki++;
            stotinki -= 5;
        } else if (stotinki >= 2) {
            countStotinki++;
            stotinki -= 2;
        } else if (stotinki >= 1) {
            countStotinki++;
            stotinki -= 1;
        } else {
            break;
        }
    }

    console.log(countStotinki);
  


}

solve ([  
    "2"
   
    
     
])