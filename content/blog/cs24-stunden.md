---
title: unlisted
date: 28.10.2025
thumbnail: /images/blog-images/cs24-stunden/aufmerksamkeit.webp
description: Helluuu, die ominöse Zahl von 70% Anwesenheit lässt sich ja bekanntlich nie
  wirklich ordentlich graspen, deswegen hab ich fix den Stundenplan
  runtergeladen (6s load time für 150kb danke für nichts CampusKaputt) um
  auszurechnen, wie viele Stunden wir eigentlich fehlen dürfen.
---

# Wie viele Stunden dürfen wir im dritten Semester schwänzen? (CS24-1)

> Helluuu, die ominöse Zahl von 70% Anwesenheit lässt sich ja bekanntlich nie wirklich ordentlich graspen, deswegen hab ich fix den Stundenplan runtergeladen (6s load time für 150kb danke für nichts CampusKaputt) um auszurechnen, wie viele Stunden wir eigentlich fehlen dürfen.

Wenn dich der code nicht interessiert zwing ich dich nicht dazu den durchzulesen, du kannst auch gleich zu den [Ergebnissen](/blog/cs24-stunden#ergebnisse) springen.

Als erstes habe ich eine Klasse für die Stunden entries angelegt weill OOP oder so:

::code-with-copy-button
```py
import json, math
from dataclasses import dataclass

@dataclass
class Stunde:
    allDay: bool
    color: str
    font_color: str
    description: str
    editable: bool
    end: int
    instructor: str
    remarks: str
    room: str
    sinstructor: str
    sroom: str
    start: int
    title: str
```
::

Als nächstes können wir den Stundenplan laden, die Dictionaries in unsere Klasse von gerade eben umwandeln, und im Anschluss die tatsächlichen Stunden rausfiltern.

Dabei müssen wir nicht nur Prüfungen rausfiltern (weil die auch im Stundenplan stehen), sondern auch mit einem Zeitstempel nur nach den Vorlesungen im 3. Semester filtern (weil CampusKaputt sei dank sind natürlich alle Stunden bis zur aller ersten "Einführung in den Studiengang - Oktober 2024" dabei omfg).

::code-with-copy-button
```py [main.py]
with open("./stundenplan.json", encoding="utf-8") as file:
    data = json.load(file)
    stundenplan: list[Stunde] = [Stunde.from_json(entry) for entry in data]
    print(stundenplan[0])

    timestamp_semester_3 = 1759038570000

    semester_3_stunden: list[Stunde] = [
        stunde
        for stunde in stundenplan
        if stunde.start > timestamp_semester_3 and "Prüfung" not in stunde.remarks
    ]

    module_set: set[str] = set()
    for stunde in semester_3_stunden:
        module_set.add(stunde.title)
```
::

Und jetzt können wir eine Map anlegen, durch die Stunden iterieren und einfach zählen wieviele Stunden pro Modul im Plan stehen.

Wenn wir von diesen Zahlen den floor (immer Abrunden, weil man ja MINDESTENS 70% braucht) von der Zahl \* 0.3:

::code-with-copy-button
```js
stunden_map: dict[str, int] = {key: 0 for key in module_set}

    for stunde in semester_3_stunden:
        stunden_map[stunde.title] += 1

    print(stunden_map)

    schwänzbar_map: dict[str, int] = {
        key: math.floor(value * 0.3) for key, value in stunden_map.items()
    }

    print(schwänzbar_map)
```
::

## Ergebnisse

**Stunden je Modul im dritten Semester INSGESAMT:**

- 5CS-ENG2F-10: 31
- 5CS-MA3ST-10: 29
- 5CS-TI2AD-10: 30
- 5CS-UIDB-10: 44
- 5CS-OPSY-10: 36

**Stunden je Modul im dritten Semester die man theoretisch schwänzen darf (alle Angaben ohne Gewähr lol):**

- 5CS-ENG2F-10: 9
- 5CS-MA3ST-10: 8
- 5CS-TI2AD-10: 9
- 5CS-UIDB-10: 13
- 5CS-OPSY-10: 10

![aufmerksamkeit.webp](/images/blog-images/cs24-stunden/aufmerksamkeit.webp)
