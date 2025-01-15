// yazdir(metin) {
//     const metinDiv = document.getElementById("metin") ;
//     metinDiv.style.fontSize = this.boyut ;
//     metinDiv.style.color = this.renk ;
//     metinDiv.style.fontFamily = this.aile ;
//     metinDiv.style.fontStyle = this.şekil ;
//     metinDiv.innerText = metin ;
// }

// guncelle(boyut , renk , aile) {
//     this.boyut = boyut ;
//     this.renk = renk ;
//     this.aile = aile ;
//     this.yazdir("Bu metin Alper Taşdemir'in aslında Alper T. kod adıyla bir polis olduğunu belgeler") ;
// }

// const yaziTipi = new Yazitipi("20px" , "blue" , " Arial" ) ;


// function yaziTipiGuncelle() {
//     const boyut = document.getElementById("boyut").value ;
//     const renk = document.getElementById("renk").value ; 
//     const aile = document.getElementById("aile").value ; 
//     yaziTipi.guncelle(boyut , aile , renk ) ;
// }



// class Haber{
//     constructor(baslik , metin , etiketler , yayinTarihi)
// {
//     this.baslik = baslik ;
//     this.metin = metin;
//     this.etiketler = etiketler ;
//     this.yayinTarihi = new Date(yayinTarihi) ;
// }
// tarihiGoster () {
//     const simdi = new Date() ;
//     const fark = Math.floor((simdi - this.yayinTarihi) / (1000*60*60*24)) ;
//     if (fark < 1 ) return `bugün` ;
//     else if (fark < 7 ) return `${fark} gün önce ` ;
//     else return this.yayinTarihi.toLocaleDateString("tr-Tr") ;
// }

// yazdir() {
//     const haberDiv = document.getElementById("Haber") ;
//     haberDiv.innerHtml = ` 
//     <h3>${this.baslik}</h3>
//     <p>${this.metin}</p>
//     <p><strong>Etiketler:</strong>${this.etiketler.join(" , ")}</p>
//     <p><strong>Tarih:</strong> ${this.tarihiGoster()}</p>` ;
// }   
// }
// const haber = new Haber( 
//     "Nova It Haberleri" ,
//     "FURKAN HER ZAMAN Kİ GİBİ GEÇ KALDI "
//     [" NOVA IT " , "HABERLER "] ,
//     "13.11.2024"
// )



// class HaberAkisi {
//     constructor() {
//         this.haberler = [] ;

//     }


// haberEkle(haber) {
//     this.haberler.push(haber) ;
// }
// haberKaldir(baslik) {this.haberler=this.haberler.filter(h => h.baslik !== baslik) ; }
// tariheGoreSirala() {this.haberler.sort((a,b) => b.yayinTarihi - a.yayinTarihi)} 
// etiketeGoreAra(etiket) {
//     return this.haberler.filter(h => h.etiketler.includes(etiket)) ;
// }
// etiketeGoreAra(etiket) {
//     return this.haberler.filter(h => h.etiketler.includes(etiket)) ;
// }
// tumHaberleriYazdir() {const haberAkisiDiv=innerHTML="" ;
//     this.haberler.forEach(haber => {
//         const haberDiv=document.createElement("div") ;
//         haberDiv.classList.add("haber") ;
//         haberDiv.innerHTML= `
//         <h3>${haber.baslik} </h3>
//         <p>${haber.baslik}</p>
//         <p class="etiketler"> <strong>Etiketler:</strong> ${haber.etiketler.join(" , ")}
//         </p>
//         <p><strong>Tarih:</strong> ${haber.tarihGoster()}</p>` ;
//         haberAkisiDiv.appendChild(haberDiv) ;
//     }) ;
// }
// }
// const akisim = new HaberAkisi() ;
// akisim.haberEkle(
//     new HaberAkisi("Haber 1" , "İlk haber metni." , ["gündem"] , "2024-11-11")
// ) ;
// akisim.haberEkle(
//     new Haber("Haber 2" , "İkinci haber metni" , ["spor"] , "2024-11-10")
// ) ;
// akisim.tariheGoreSirala() ;
// akisim.tumHaberleriYazdir() ;


class Button {
    constructor(width , height , text) {
        this.width = width ; 
        this.height = height ; 
        this.text = text ; 
    }
    showBtn() {
        document.write(
            `<button style="width:${this.width}px; height:${this.height}px;"
            ${this.text}
            </button>`
        ) ;
    }

}

class BootstrapButton extends Button {
    constructor(width , height , text , color) {
        super(width,height,text) ;
        this.color=color;
    }
    showBtn() {
        document.write(
            `<button style="width:${this.width}px;height:${this.height}pxİ;background-color:${this.color};">
            ${this.text}</button>`
        ) ;
    }
}

const myButton =  new BootstrapButton(200 , 70 , "Tıkla" , "Yellow") ;
myButton.showBtn() ;