# Variabele

Je zou dit kunnen programmeren om éénmalig een getal te laten aftellen (count-down):

```python
from microbit import *
display.show(4)
sleep(500) #laat de microcontroller een beetje slapen 500 milliseconden - wacht om volgend statement uit te voeren
display.show(3)
sleep(500)
display.show(2)
sleep(500)
display.show(1)
sleep(500)
display.show(0)
sleep(500)
while True:
  display.show(Image( '90900:'
                      '09990:'
                      '00909:'
                      '09090:'
                      '90090:'
                    ))
  sleep(500)
  display.show(Image( '60600:'
                      '06660:'
                      '00600:'
                      '06060:'
                      '60006:'
                    ))
  sleep(500)

```
Als je de tussentijden wenst aan te passen, moet je nu overal de 500 aan passen naar een nieuwe waarde. Dit kan éénmalig met een variabele gebeuren.

```python
from microbit import *
wacht_tijd=500 #variabele met de naam wacht_tijd
                #en de inhoud ervan is een integer met waarde 500

display.show(4)
sleep(wacht_tijd) 
display.show(3)
sleep(wacht_tijd)
display.show(2)
sleep(wacht_tijd)
display.show(1)
sleep(wacht_tijd)
display.show(0)
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

<div style="background-color:darkgreen; text-align:left; vertical-align:left; padding:15px;">
<p style="color:lightgreen; margin:10px">Experimenteer: Zet eens de variabele wacht_tijd op waarde 0. Wat gebeurt er?<br>
Laat de “sleep“ eens weg. Wat gebeurt er?
</p>
</div>