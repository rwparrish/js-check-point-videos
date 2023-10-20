/*
What will each statement log to the console? First, record yourself making a prediction. Then, test your prediction and explain why each variable is scoped the way it is.
*/


function scopey() {

    var a = "first Value"
    let b = "first Value"
    const c = "first Value"
    d = "first Value"
		
    if (true) {
      var a = "second Value"
      let b = "second Value"
      const c = "second Value"
      d = "second Value"
			}
		

		
    console.log("a (var) is,", a)
    console.log("b (let) is,", b)
    console.log("c (const) is,", c)
    console.log("d (evil) is,", d)
		
}