---
title: unlisted
---

# Wie viele Stunden dürfen wir im dritten Semester schwänzen? (CS24-1)

Hellu, die ominöse Zahl von 70% Anwesenheit lässt sich ja bekanntlich nie wirklich ordentlich graspen, deswegen hab ich fix den Stundenplan runtergeladen (6s load time für 150kb danke für nichts CampusKaputt) um auszurechnen, wie viele Stunden wir eigentlich fehlen dürfen.

```js [main.py]
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

    @classmethod
    def from_json(cls, obj: dict) -> "Stunde":
        return cls(
            allDay=bool(obj.get("allDay", False)),
            color=obj.get("color", ""),
            font_color=obj.get("font_color", obj.get("fontColor", "")),
            description=obj.get("description", ""),
            editable=bool(obj.get("editable", False)),
            end=int(obj.get("end", 0)) if obj.get("end") is not None else 0,
            instructor=obj.get("instructor", ""),
            remarks=obj.get("remarks", ""),
            room=obj.get("room", ""),
            sinstructor=obj.get("sinstructor", ""),
            sroom=obj.get("sroom", ""),
            start=int(obj.get("start", 0)) if obj.get("start") is not None else 0,
            title=obj.get("title", ""),
        )


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

    stunden_map: dict[str, int] = {key: 0 for key in module_set}

    for stunde in semester_3_stunden:
        stunden_map[stunde.title] += 1

    print(stunden_map)

    schwänzbar_map: dict[str, int] = {
        key: math.floor(value * 0.3) for key, value in stunden_map.items()
    }

    print(schwänzbar_map)
```
