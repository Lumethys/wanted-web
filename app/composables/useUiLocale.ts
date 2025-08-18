import * as uiLocales from '@nuxt/ui/locale'

export const useUiLocale = () => {
    const { locale } = useI18n();

    const uiLocale = computed(() => uiLocales[locale.value]);

    const lang = computed(() => uiLocale.value.code);
    const dir = computed(() => uiLocale.value.dir);

    useHead({
        htmlAttrs: {
            lang,
            dir
        },
    });

    return {
        uiLocale,
    };
}