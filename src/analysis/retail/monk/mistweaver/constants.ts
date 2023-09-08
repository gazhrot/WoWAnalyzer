import SPELLS from 'common/SPELLS';
import { TALENTS_MONK } from 'common/TALENTS';
export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  // Spells
  TALENTS_MONK.ENVELOPING_MIST_TALENT.id,
  TALENTS_MONK.ESSENCE_FONT_TALENT.id,
  SPELLS.ESSENCE_FONT_BUFF.id,
  TALENTS_MONK.RENEWING_MIST_TALENT.id,
  SPELLS.RENEWING_MIST_HEAL.id,
  SPELLS.VIVIFY.id,
  TALENTS_MONK.SOOTHING_MIST_TALENT.id,
  SPELLS.GUSTS_OF_MISTS.id,
  SPELLS.GUST_OF_MISTS_CHIJI.id,
  // Cooldowns
  TALENTS_MONK.REVIVAL_TALENT.id,
  TALENTS_MONK.RESTORAL_TALENT.id,

  // Talents
  TALENTS_MONK.CHI_BURST_TALENT.id,
  SPELLS.CHI_BURST_HEAL.id,
  TALENTS_MONK.CHI_WAVE_TALENT.id,
  TALENTS_MONK.REFRESHING_JADE_WIND_TALENT.id,
  SPELLS.REFRESHING_JADE_WIND_HEAL.id,
  TALENTS_MONK.SHEILUNS_GIFT_TALENT.id,

  // Misc
  SPELLS.LEECH.id,
];

// Core Constants
export const LIFE_COCOON_HEALING_BOOST = 0.5;
export const TEACHINGS_OF_THE_MONASTERY_DURATION = 20000;

// Talent Constants
export const CF_BUFF_PER_STACK = 0.2;
export const MAX_CHIJI_STACKS = 3;
export const LIFECYCLES_MANA_REDUCTION_PERCENT = 0.25;
export const MANA_TEA_REDUCTION = 0.5;
export const JADE_BOND_INC = 0.4;
export const NOURISHING_CHI_INC = 0.2;
export const DANCING_MIST_CHANCE = 0.05; // per rank
export const RAPID_DIFFUSION_DURATION = 3000; // per rank
export const RISING_MIST_EXTENSION = 4000;
export const ENVELOPING_MIST_INCREASE = 0.3;
export const MISTWRAP_INCREASE = 0.1;
export const YULON_REDUCTION = 0.5;

export const LIFECYCLES_MANA_PERC_REDUCTION = 0.25;

export const ATTRIBUTION_STRINGS = {
  BOUNCED: 'Bounced',
  HARDCAST_ENVELOPING_MIST: 'Enveloping Mist Hardcast',
  MISTY_PEAKS_ENVELOPING_MIST: 'Enveloping Mist Misty Peaks Proc',
  HARDCAST_RENEWING_MIST: 'Renewing Mist Hardcast',
  RAPID_DIFFUSION_RENEWING_MIST: 'Renewing Mist Rapid Diffusion',
  DANCING_MIST_RENEWING_MIST: 'Renewing Mist Dancing Mist',
  MISTS_OF_LIFE_RENEWING_MIST: 'Renewing Mist Mists of Life',
  HARDCAST_ESSENCE_FONT: 'Essence Font Hardcast',
  DANCING_MIST_SOURCES: {
    DM_SOURCE_RD: 'Dancing Mist Source - Rapid Diffusion',
    DM_SOURCE_HC: 'Dancing Mist Source - Hardcast',
    DM_SOURCE_MOL: 'Dancing Mist Source - Mists of Life',
  },
  RAPID_DIFFUSION_SOURCES: {
    RD_SOURCE_RSK: 'Rapid Diffusion Source - Rising Sun Kick',
    RD_SOURCE_ENV: 'Rapid Diffusion Source - Enveloping Mist',
  },
};

export const SECRET_INFUSION_BUFFS = [
  SPELLS.SECRET_INFUSION_CRIT_BUFF,
  SPELLS.SECRET_INFUSION_HASTE_BUFF,
  SPELLS.SECRET_INFUSION_MASTERY_BUFF,
  SPELLS.SECRET_INFUSION_VERS_BUFF,
];

export const LESSONS_BUFFS = [
  SPELLS.LESSON_OF_ANGER_BUFF,
  SPELLS.LESSON_OF_FEAR_BUFF,
  SPELLS.LESSON_OF_DOUBT_BUFF,
  SPELLS.LESSON_OF_DESPAIR_BUFF,
];

export const SPELL_COLORS = {
  MISTY_PEAKS: '#c8fadb',
  DANCING_MIST: '#42e7fc',
  RAPID_DIFFUSION: '#1c9c4d',
  DANCING_MISTS: '#38ffdb',
  ESSENCE_FONT: '#1f77b4',
  ESSENCE_FONT_BUFF: '#aec7e8',
  GUSTS_OF_MISTS: '#ff7f0e',
  VIVIFY: '#00FF98',
  RENEWING_MIST: '#14522c',
  ENVELOPING_MIST: '#98df8a',
  SOOTHING_MIST: '#d62728',
  EXPEL_HARM: '#ff9896',
  REVIVAL: '#9467bd',
  RISING_SUN_KICK: '#c5b0d5',
  BLACKOUT_KICK: '#8c564b',
  BLACKOUT_KICK_TOTM: '#c49c94',
  TIGER_PALM: '#e377c2',
  UPLIFTED_SPIRITS: '#f7b6d2',
  ALTERNATE_GUST_OF_MIST: '#7f7f7f',
};
