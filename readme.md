## Playing with Tone.js, Tonal.js, and NexusUI

**Beat It!** has three main blocks: a drum machine, a melody step sequencer, and a control/selector panel.

### Drum Machine

The drum machine is designed to quickly create complex rhythms. It features four rows:
- The first row is for quarter notes.
- The second row is for eighth notes.
- The third row is for triplets.
- The fourth row is for sixteenth notes.

It also includes three different samples and a mute button for each drum element.

### Melody Step Sequencer

The melody step sequencer consists of two parts:
- **Note Selector**: Connected to Tonal.js, allowing you to play various scales, including exotic ones.
- **Arpeggio Selector**: Composed of four rows:
  - **x1 row**: Plays only one note (selected in the note selector).
  - **x2 row**: Plays the first and third notes of the arpeggio (root determined by the selected note) in an eighth-note pattern.
  - **x3 row**: Plays the first, third, and fifth notes in a triplet pattern.
  - **x4 row**: Plays the full arpeggio, including the seventh note, in a sixteenth-note pattern.

### FX & Sound Control Panel

This panel includes:
- Four selectors to change synth presets.
- A crossfader to mix rhythm and melody.
- Three effects (FX) that can be toggled on or off.

The synth selectors determine the preset used for each arpeggio row.

---

For this repository, I've used:
- **Tone.js**: To interact with the Web Audio API.
- **Tonal.js**: For scale generation.
- **NexusUI**: To render the matrix interfaces for the drum machine and melody step sequencer.

**Beat It!** is entirely written in JavaScript, utilizing jQuery, CSS, and HTML. The music icons are provided by [The Noun Project](https://thenounproject.com).

The project is currently under development; some features may not function correctly.

You can play with **Beat It!** here: [https://ce56cd3e.jamming-with-js.pages.dev/](https://ce56cd3e.jamming-with-js.pages.dev/)

![sample web image](https://github.com/gusblacknails/Jamming-with-JS/blob/master/public/images/beatIt.png)

Check out some demos at https://www.youtube.com/channel/UCkJFK78qUJwzDx78wMyBBTQ
