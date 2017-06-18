import { WardrobeAddonPage } from './addon/addon.page';
import { WardrobeDraftOutfitPage } from './draft-outfit/draft-outfit.page';
import { WardrobeGenerateOutfitPage } from './generate-outfit/generate-outfit.page';
import { MY_WARDROBE_COMPONENTS, WardrobeMyWardrobePage } from './my-wardrobe/my-wardrobe';
import { WardrobeSavedOutfitsPage } from './saved-outfits/saved-outfits.page';
import { WardrobePage } from './wardrobe.page';

const WARDROBE_COMPONENTS: any[] = [
  WardrobePage,
  WardrobeAddonPage,
  WardrobeDraftOutfitPage,
  WardrobeGenerateOutfitPage,
  MY_WARDROBE_COMPONENTS,
  WardrobeSavedOutfitsPage,
];

export {
  WARDROBE_COMPONENTS,
  WardrobePage,
  WardrobeAddonPage,
  WardrobeDraftOutfitPage,
  WardrobeGenerateOutfitPage,
  MY_WARDROBE_COMPONENTS,
  WardrobeMyWardrobePage,
  WardrobeSavedOutfitsPage
};
