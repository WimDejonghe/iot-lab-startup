# For-loop

Stel dat je een aftelling wilt maken niet van 4 naar 0, maar van 1000000 naar 0. Dan wordt het programma onzinnig met een miljoen aan dezelfde statements.
Beter is hiervoor een FOR-loop (ook een herhalings iteratie) te gebruiken. In een For-loop is het aantal herhalingen gekend en wordt bijgehouden in een variabele die telkens met 1 wordt verminderd. 

![example image](./images/forloop.jpg "De For Loop")

```python
from microbit import *
wacht_tijd=500 #variabele met de naam wacht_tijd
                #en de inhoud ervan is een integer met waarde 500

for i in range (4): #herhaling van 4 keer 
                    #met gebruik van een integer 
                    #(teller)variabele met naam i
  display.show(i)
  sleep(wacht_tijd) 

while True:
  display.show(Image( '90900:'
                      '09990:'
                      '00909:'
                      '09090:'
                      '90090:'
                    ))
  sleep(wacht_tijd)
  display.show(Image( '60600:'
                      '06660:'
                      '00600:'
                      '06060:'
                      '60006:'
                    ))
  sleep(wacht_tijd)
```

::: tip
**Concatenatie:**
Is het samenvoegen (aan elkaar kleven) van twee string-type variabelen.
:::

```python
from microbit import *
tekst1 = "Hallo"
tekst2 = " wereld!"
samengevoegd1 = tekst1 + tekst2
```

::: tip
**Type casting:**
Is het converteren (omvormen) van een variabele naar een ander type (indien mogelijk).
:::

```python
from microbit import *
tekst = "6"
naarInteger = int(tekst)
```