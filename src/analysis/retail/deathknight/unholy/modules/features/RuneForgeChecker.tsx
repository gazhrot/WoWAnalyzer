import { RuneForgeChecker } from 'analysis/retail/deathknight/shared';
import SPELLS from 'common/SPELLS';
import { SpellLink } from 'interface';
import { Options } from 'parser/core/Analyzer';
import SUGGESTION_IMPORTANCE from 'parser/core/ISSUE_IMPORTANCE';

class UnholyRuneForgeChecker extends RuneForgeChecker {
  constructor(options: Options) {
    super(options);

    // Hysteria & FC need no suggestions for blood
    this.runeForges = [
      {
        forge: SPELLS.RUNE_OF_THE_STONESKIN_GARGOYLE,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            <SpellLink spell={SPELLS.RUNE_OF_THE_STONESKIN_GARGOYLE} /> is a survivability runeforge
            at the cost of damage and healing. Use{' '}
            <SpellLink spell={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER} /> instead
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_RAZORICE,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink spell={SPELLS.RUNE_OF_RAZORICE} /> as Unholy Death Knight, use{' '}
            <SpellLink spell={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_SANGUINATION,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink spell={SPELLS.RUNE_OF_SANGUINATION} /> as Unholy Death Knight, use{' '}
            <SpellLink spell={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_APOCALYPSE,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink spell={SPELLS.RUNE_OF_APOCALYPSE} /> as Unholy Death Knight, use{' '}
            <SpellLink spell={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_UNENDING_THIRST,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink spell={SPELLS.RUNE_OF_UNENDING_THIRST} /> as Unholy Death Knight,
            use <SpellLink spell={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_SPELLWARDING,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink spell={SPELLS.RUNE_OF_SPELLWARDING} /> as Unholy Death Knight, use{' '}
            <SpellLink spell={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER} /> instead.
          </>
        ),
      },
    ];
  }
}

export default UnholyRuneForgeChecker;
