import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, setOptions } from "@mobiscroll/react";
import { useMemo } from "react";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function App() {
  const myEvents = useMemo(
    () => [
      {
        bufferAfter: 30,
        start: "2024-05-14T06:00",
        end: "2024-05-14T08:00",
        title: "Morning routine",
        resource: 1,
      },
      {
        bufferAfter: 120,
        bufferBefore: 30,
        start: "2024-05-14T16:00",
        end: "2024-05-14T20:00",
        title: "Friends binge marathon",
        resource: 4,
      },
      {
        bufferAfter: 120,
        bufferBefore: 30,
        start: "2024-05-14T13:00",
        end: "2024-05-14T21:00",
        title: "Mastering CSS class",
        resource: 2,
      },
      {
        bufferAfter: 10,
        bufferBefore: 15,
        start: "2024-05-14T08:00",
        end: "2024-05-14T10:00",
        title: "Product team mtg.",
        resource: 2,
      },
      {
        bufferAfter: 20,
        bufferBefore: 30,
        start: "2024-05-14T16:30",
        end: "2024-05-14T19:30",
        title: "Cinema afternoon",
        resource: 3,
      },
      {
        bufferAfter: 10,
        bufferBefore: 10,
        start: "2024-05-14T08:30",
        end: "2024-05-14T10:00",
        title: "Quick mtg. with Martin",
        resource: 3,
      },
      {
        bufferBefore: 45,
        start: "2024-05-14T09:30",
        end: "2024-05-14T12:00",
        title: "Product team mtg.",
        resource: 4,
      },
    ],
    []
  );

  const myResources = [
    {
      id: 1,
      name: "Resource 1",
      color: "#e20000",
    },
    {
      id: 2,
      name: "Resource 2",
      color: "#76e083",
    },
    {
      id: 3,
      name: "Resource 3",
      color: "#4981d6",
    },
    {
      id: 4,
      name: "Resource 4",
      color: "#f7961e",
    },
  ];

  const view = useMemo(() => ({ timeline: { type: "day" } }), []);

  return (
    <Eventcalendar
      height="100vh"
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      eventDelete={true}
      showEventBuffer={true}
      data={myEvents}
      view={view}
      resources={myResources}
    />
  );
}

export default App;
