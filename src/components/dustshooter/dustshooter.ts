import {
  computed,
  createComponent,
  defineComponent,
  ref
} from '@vue/composition-api';

const moves: { [en: string]: [string, number] } = {
  dustshoot: ['ダストシュート', 80],
  dracoMeteor: ['りゅうせいぐん', 90],
  hydropomp: ['ハイドロポンプ', 80]
};
type MoveNameList = keyof typeof moves;

export const Dustshooter = defineComponent({
  setup() {
    const move = ref<MoveNameList | undefined>(Object.keys(moves)[0]);
    const count = ref<number>(1);
    const totalHitRate = computed<number>(() =>
      move.value ? (moves[move.value][1] / 100) ** count.value : 1
    );
    const result = ref<boolean | undefined>();

    const execute = () => {
      result.value = Math.random() < totalHitRate.value;
    };

    return { move, count, totalHitRate, result, execute, moves };
  }
});
