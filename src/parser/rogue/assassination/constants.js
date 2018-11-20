import SPELLS from 'common/SPELLS';

// from https://www.wowhead.com/spell=137037/assassination-rogue
export const ABILITIES_AFFECTED_BY_DAMAGE_INCREASES = [
  SPELLS.MELEE,
  SPELLS.BLINDSIDE_TALENT,
  SPELLS.CRIMSON_TEMPEST_TALENT,
  SPELLS.ENVENOM,
  SPELLS.FAN_OF_KNIVES,
  SPELLS.GARROTE,
  SPELLS.MUTILATE,
  SPELLS.MUTILATE_MAINHAND,
  SPELLS.MUTILATE_OFFHAND,
  SPELLS.POISON_BOMB,
  SPELLS.POISONED_KNIFE,
  SPELLS.RUPTURE,
  SPELLS.TOXIC_BLADE_TALENT,  
  SPELLS.DOUBLE_DOSE,
  SPELLS.INTERNAL_BLEEDING_TALENT,
  SPELLS.DEADLY_POISON_DOT,
  SPELLS.DEADLY_POISON_PROC,
  SPELLS.WOUND_POISON,
];

// from https://www.wowhead.com/spell=196864/master-poisoner
export const ABILITIES_AFFECTED_BY_POISON_DAMAGE_INCREASES = [
  SPELLS.DEADLY_POISON_DOT,
  SPELLS.DEADLY_POISON_PROC,
  SPELLS.WOUND_POISON,
];

export const NIGHTSTALKER_BLACKLIST = [
  SPELLS.MELEE,
  SPELLS.RUPTURE,
  SPELLS.GARROTE,
  SPELLS.CRIMSON_TEMPEST_TALENT,
  SPELLS.DEADLY_POISON_DOT,

];
