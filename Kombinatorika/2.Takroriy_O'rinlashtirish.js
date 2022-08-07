/*
Tarif: Takroriy o'rinlashtirish deb, n ta elemtni ichidan uning har bir elemetini 
bir marta yoki bir nechat marta tanlab m ta shunday element hosil qilshdga aytiladiki, 
ular bir-birdan elemetlar tarkibi yoki tarkibdagi elementlar joylashuvi bilan farq qiladi.

#####################################################################################################
Misol 1,3,4,6 => Nechta 2 xonali son hosil qilsh mumkin ?

[4][] => Ā = 4 * 4 = 4² = 16 ta raqam hosil qilishimiz mukin ekan.
1   1
3   3
4   4
6   6
#####################################################################################################
Misol 1,2,3,4,5,6 => Nechta 4 xonali son hosil qilsh mumkin ?
[3][3] [][] => Ā = 6 * 6 * 6 * 6 = (6 ning 4 darajasi) = 1296 ta raqam hosil qilishimiz mukin ekan.
 1  1  1  1
 2  2  2  2
 3  3  3  3
 4  4  4  4
 5  5  5  5
 6  6  6  6

Elementlar soni - n => n=6
takroriy o'rinlashtirishlar soni - m => m=4
3.jpeg rasmdagi formula
#####################################################################################################
Misol: 0,2,4,7,8,9 => Nechta 3 xonali son hosil qilsh mumkin ?

[][][] => Ā = 5 * 6 * 6 = 180 ta
(0) 0 0.  (qavsga olingan 0 o'chirilgan sababi 3 xonali son 0 dan boshlanmaydi).)  
2 2 2
4 4 4
7 7 7
8 8 8
9 9 9
#####################################################################################################
Misol: 0 va 8 raqamiga ega bo'lmagan 3 xolnali sonlar nechta ?

[][][] => Ā = 8 * 8 * 8 = 8³ = 512 ta
1 1 1       => 111, 122, 163, 712 ... shu kabi raqamlar ishtirok eatadi
2 2 2       => 811, 302, 400 ... shu kabi raqamlar ishtirok etmaiydi.
3 3 3
4 4 4
5 5 5
6 6 6
7 7 7
9 9 9

#####################################################################################################
Misol: ABC123 shu ko'rinichdagi avtomibl raqamlari nechta?

[A][B][C][1][2][3]
26 26 26 10 10 10

Ā = 26 * 26 * 26 * 10 * 10 * 10 = 17576000 ta.

*/
