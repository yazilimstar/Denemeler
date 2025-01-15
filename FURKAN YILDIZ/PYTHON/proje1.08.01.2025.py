sepet = {}
while True:
     urun_adi = input("Ürün adı girin (çıkmak için 'q') : ")
     if urun_adi.lower() == "q":
        break
miktar = input(f"{urun_adi} için miktar girin:")
if not miktar.isdigit():
     print("Lütfen bir sayı girin !")
     
miktar = int(miktar)
sepet[urun_adi] = miktar
print("\n--- Alışveriş Sepeti")
for urun, miktar in sepet.items():
 print(f"{urun}: {miktar} adet")
toplam_urun=sum(sepet.values())
print("\nToplam ürün sayısı:" , toplam_urun)
toplam_tutar = 0
for urun in sepet:
    birim_fiyat = input(f"{urun} için birim fiyat girin (TL)")
    try:
        birim_fiyat = float(birim_fiyat)
        toplam_tutar += sepet[urun]*birim_fiyat
    except ValueError:
         print("Geçersiz fiyat girdiniz. Devam ediliyor...")
         continue
    print("\n---Ödeme Bilgiler ---")
    print("Toplam tutar:" , str(toplam_tutar) + " TL ")
else: 
             print("İndirim kazanmaya çok yakınsınız!")
             print("\nAlışverişiniz için TEŞEKKÜRLER !")