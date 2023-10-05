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
		
    //What will each statement log to the console?
		
    console.log("a (var) is,", a)
    console.log("b (let) is,", b)
    console.log("c (const) is,", c)
    console.log("d (evil) is,", d)
		
}
