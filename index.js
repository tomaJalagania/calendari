class Calendari {
    constructor(el) {
        this.root = Calendari.createTag('div',{style: "width:100%"})
        document.getElementById(el).appendChild(this.root)

        this.curentDate = new Date();
        this.countMonth = 1;
        this.countDay = 0
        this.curentMonth = this.curentDate.getMonth();
        
        this.Months = [
            "იანვარი",
            "თებერვალი",
            "მარტი",
            "აპრილი",
            "მაისი",
            "ივნისი",
            "ივლისი",
            "აგვისტო",
            "სექტემბერი",
            "ოქტომბერი",
            "ნოემბერი",
            "დეკემბერი"
        ]
        this.days = [
            "კვ",
            "ორშ",
            "სამშ",
            "ოთხშ",
            "ხუთშ",
            "პრ",
            "შბ"
        ]
        this.fullDay = 42;
        this.createCalendar()
        
    }
    createCalendar() {
        this.root.innerHTML = ""
        this.dayOfMonth = new Date(this.curentDate.getFullYear(),this.curentDate.getMonth()+this.countMonth,0).getDate()
        this.firstDay = new Date(this.curentDate.getFullYear(),this.curentDate.getMonth()+this.countDay ,1).getDay()
        this.firstBtn  = Calendari.createTag('button',{textContent:"<<"});
        this.nextBtn = Calendari.createTag('button',{textContent: ">>"})
        this.monthParagraf = Calendari.createTag('h3',{textContent:this.Months[this.curentMonth]})
        this.calendarHead = Calendari.createTag('div',{style:"width: 100%;display:flex; justify-content:space-between; align-items:center;"});
        this.calendarHead.appendChild(this.firstBtn);
        this.calendarHead.appendChild(this.monthParagraf);
        this.calendarHead.appendChild(this.nextBtn)
        this.root.appendChild(this.calendarHead)

        this.bodyDiv = Calendari.createTag('div',{style:"width:100%;display:flex; justify-content: space-between; flex-wrap:wrap;align-items:center"})
        this.root.appendChild(this.bodyDiv)
        let boxSize = this.bodyDiv.clientWidth / 7
        var widthStr = `width: ${boxSize}px`;
        for(let i = 0; i<this.days.length; i++) {
            let div = Calendari.createTag("div",{style:widthStr,textContent: this.days[i],className:"date"})
            this.bodyDiv.appendChild(div)
        }
        console.log(this.firstDay)
        for(let i =0; i<this.fullDay; i++) {
            
           
            this.day = `${i<this.firstDay || i > (this.dayOfMonth+this.firstDay-1)? "" : i - (this.firstDay - 1)}`
        
            let color = `${this.day == this.curentDate.getDate() ? "#fff;border-radius:50%;background-color:#37cc0a;":"black"}`
            this.div = Calendari.createTag("div",{style:`width:${boxSize}px;height:${boxSize/2}px; color:${color}`,textContent: this.day,className:"date"})
            this.bodyDiv.appendChild(this.div)
            
        }
        this.firstBtn.addEventListener('click',e=>{
            this.countMonth--;
            this.countDay--;
            this.bodyDiv.innerHTML = ""
            this.calendarHead.innerHTML = ""
            this.curentMonth--;
            console.log(this.countDay)
            this.createCalendar()
        })
        this.nextBtn.addEventListener('click',e=>{
            this.countMonth++;
            this.countDay++;
            this.curentMonth++
            this.bodyDiv.innerHTML = ""
            this.calendarHead.innerHTML = ""
           
            this.createCalendar()
        })
        console.log(this.firstDay)
    }
    static createTag(name,props) {
        let tag = document.createElement(name);
        if(props != "undefined") {
            Object.keys(props).forEach(key=>{
              tag[key] = props[key]
            })
        }
        return tag
    }
}

new Calendari('root')