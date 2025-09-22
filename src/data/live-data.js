// Un état partagé et contrôlé
export let liveData = Object.freeze({ data: null, updatedAt: null });

export function updateLiveData(next) {
  liveData = Object.freeze(next); // remplacement atomique
}

export function getLiveData() {
  return liveData; // lecture seule
}