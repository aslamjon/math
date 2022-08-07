/*

  Kombinatorika (Birlashmalar)

1. Takrorsiz o'rinlashtirish (A)
2. Takroriy o'rinlashtirish (Ā)
3. Takrorsiz o'rin almashtirish (P)
4. Takroriy o'rin almashtirish (P...)
5. Takrorsiz gruppalash (C)
6. Takroriy gruppalash (Č)

Tarif: Har qanday narsalardan tuzilgan bir biridan shu narsalarning tartibi yoki o'zi bilan farq 
qiluvchi gruppalar (to'plamlar) birlashmalar (kkombinatorika) deyiladi. Birlashmalar tashkil 
etadigan narsalr uning elementlari deyiladi.

                        Takrorsiz O'rinlashtirish (A)

Tarif: n ta elamentdan m tadan o'rinlashtirish deb shunday birlashmalarga aytiladiki, 
ularning har birida berilgan n ta elementdan m ta element bo'lib, ular bir-biridan elementlari yoki elementlarining tartibi bilan farq qiladi.

#####################################################################################################
Misol: 1,2,3,4 => Nechta 2 xonali son hosil qilsh mumkin ? 

Xaylimizda ikkta katakcha hosil qilamiz.
ulardan bitasini bita katakchaga solsag ikkinchi katakchaga bu son ishlatilishi mumkin emas.

[2][] => A = 4 * 3 = 12 ta raqam hosil qilishimiz mukin ekan.
1   1
2   3
3   4
4
#####################################################################################################
Misol: 1,2,3,4,5,6 => Nechta 2 xonali son hosil qilsh mumkin ?
[3][5][2][] => A = 6 * 5 * 4 * 3 = 360 ta raqam hosil qilishimiz mukin ekan.
1   1  1  1
2   2  2  4
3   4  4  6
4   5  6
5   6
6

Elementlar soni - n => n=6
O'rinlashtirishlar soni - m => m=4
1.jpeg rasmdagi formula

A = n! / (n - m)!    => n ta elementdan m tadan o'rinlashtirishlar soni.

hozirgi misolimizda A = 6! / (6 - 4)! = 6! / 2! = 6 * 5 * 4 * 3 = 360 ta raqam hosil qilishimiz mukin ekan.
#####################################################################################################
Misol: 30 ta o'quvchisi bor sinifda boshliq, yordamchi, kotib, ncha xil usul bilan saylanishi mumkin?
o'quvchi => n = 30
boshliq, yordamchi, kotib =>  m= 3

1-formula bilan 
[boshqil][yordamchi][kotib] => A = 30 * 29 * 28 = 24360 xil usulda saylanishi mumkin ekan.
    30.     29.        28

2-formula bilan
A = 30! / (30 - 3)! = 30! / 2! = 30 * 29 * 28 = 24360 xil usulda saylanishi mumkin ekan.
#####################################################################################################
O'quvchilar chalg'iydigan misol
Misol: 0,1,2,3,4,5,6,7,8,9 => Nechta 3 xonali son hosil qilsh mumkin ?
2.jpeg rasmda

[3][5][] => A = 9 * 9 * 8 => 648 ta
(0) 0  0      (qavsga olingan 0 o'chirilgan sababi 3 xonali son 0 dan boshlanmaydi).
1   1  1
2   2  2
3   4  4
4   5  6
5   6  7
6   7  8
7   8  9
8   9
9
*/
