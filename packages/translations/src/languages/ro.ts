// @ts-nocheck // TODO: Remove this and add missing translations

import type { Language } from '../types.js'

export const ro: Language = {
  dateFNSKey: 'ro',
  translations: {
    authentication: {
      account: 'Cont',
      accountOfCurrentUser: 'Contul utilizatorului curent',
      alreadyActivated: 'Deja activat',
      alreadyLoggedIn: 'Deja autorizat',
      apiKey: 'Cheia API',
      authenticated: 'Autentificat',
      backToLogin: 'Înapoi la login',
      beginCreateFirstUser: 'Pentru a începe, creați primul utilizator.',
      changePassword: 'Schimbați parola',
      checkYourEmailForPasswordReset:
        'Verificați emailul pentru un link care vă va permite să vă resetați parola în siguranță.',
      confirmGeneration: 'Confirmați generarea',
      confirmPassword: 'Confirmați parola',
      createFirstUser: 'Creați primul utilizator',
      emailNotValid: 'Emailul furnizat nu este valid',
      emailSent: 'Email trimis',
      enableAPIKey: 'Activați cheia API',
      failedToUnlock: 'Nu s-a reușit deblocarea',
      forceUnlock: 'Forțați deblocarea',
      forgotPassword: 'Am uitat parola',
      forgotPasswordEmailInstructions:
        'Vă rugăm să introduceți emailul dumneavoastră mai jos. Veți primi un mesaj de email cu instrucțiuni despre cum să vă resetați parola.',
      forgotPasswordQuestion: 'Ați uitat parola?',
      generate: 'Generează',
      generateNewAPIKey: 'Generează o nouă cheie API',
      generatingNewAPIKeyWillInvalidate:
        'Generarea unei noi chei API va <1>invalida</1> cheia anterioară. Sunteți sigur că doriți să continuați?',
      lockUntil: 'Blocați până la',
      logBackIn: 'Autentificați-vă din nou',
      logOut: 'Deconectează-te',
      loggedIn:
        'Pentru a vă autentifica cu un alt utilizator, trebuie să vă <0>deconectați mai întâi</0>.',
      loggedInChangePassword:
        'Pentru a vă schimba parola, accesați <0>contul</0> și editați-vă parola acolo.',
      loggedOutInactivity: 'Ați fost deconectat din cauza inactivității.',
      loggedOutSuccessfully: 'Ați fost deconectat cu succes.',
      login: 'Autentificare',
      loginAttempts: 'Încercări de autentificare',
      loginUser: 'Autentificare utilizator',
      loginWithAnotherUser:
        'Pentru a vă autentifica cu un alt utilizator, trebuie să vă <0>deconectați mai întâi</0>.',
      logout: 'Ieșire',
      logoutUser: 'Deconectați utilizatorul',
      newAPIKeyGenerated: 'Cheie nouă API generată.',
      newAccountCreated:
        'A fost creat un nou cont pe care îl puteți accesa <a href="{{serverURL}}">{{serverURL}}</a> Vă rugăm să intrați pe următorul link sau să copiați URL-ul de mai jos în browserul dvs. pentru a vă verifica emailul: <a href="{{verificationURL}}">{{verificationURL}}</a><br> După ce vă verificați adresa de email, vă veți putea autentifica cu succes.',
      newPassword: 'Parolă nouă',
      resetPassword: 'Resetează parola',
      resetPasswordExpiration: 'Resetați expirarea parolei',
      resetPasswordToken: 'Resetați token-ul parolei',
      resetYourPassword: 'Resetați-vă parola',
      stayLoggedIn: 'Rămâneți conectat',
      successfullyUnlocked: 'Deblocat cu succes',
      unableToVerify: 'Nu se poate verifica',
      verified: 'Verificat',
      verifiedSuccessfully: 'Verificat cu succes',
      verify: 'Verifică',
      verifyUser: 'Verifică utilizatorul',
      verifyYourEmail: 'Verifică-ți emailul',
      youAreInactive:
        'Nu ați mai fost activ de ceva timp și în scurt timp veți fi deconectat automat pentru propria dvs. securitate. Doriți să rămâneți conectat(ă)?',
      youAreReceivingResetPassword:
        'Primiți acest mesaj deoarece dumneavoastră (sau altcineva) ați solicitat resetarea parolei pentru contul dumneavoastră. Vă rugăm să dați clic pe următorul link sau să îl copiați în browserul dvs. pentru a finaliza procesul:',
      youDidNotRequestPassword:
        'Dacă nu ați solicitat acest lucru, vă rugăm să ignorați acest email și parola dvs. va rămâne neschimbată.',
    },
    error: {
      accountAlreadyActivated: 'Acest cont a fost deja activat.',
      autosaving: 'A existat o problemă în timpul salvării automate a acestui document.',
      correctInvalidFields: 'Vă rugăm să corectați datele invalide.',
      deletingFile: 'S-a produs o eroare la ștergerea fișierului.',
      deletingTitle:
        'S-a produs o eroare în timpul ștergerii {{title}}. Vă rugăm să verificați conexiunea și să încercați din nou.',
      emailOrPasswordIncorrect: 'Adresa de e-mail sau parola este incorectă.',
      followingFieldsInvalid_one: 'Următorul câmp nu este valid:',
      followingFieldsInvalid_other: 'Următoarele câmpuri nu sunt valabile:',
      incorrectCollection: 'Colecție incorectă',
      invalidFileType: 'Tip de fișier invalid',
      invalidFileTypeValue: 'Tip de fișier invalid: {{value}}',
      loadingDocument: 'A existat o problemă la încărcarea documentului cu ID-ul de {{id}}.',
      localesNotSaved_one: 'Următoarea localizare nu a putut fi salvată:',
      localesNotSaved_other: 'Următoarele localizări nu au putut fi salvate:',
      missingEmail: 'Lipsește emailul.',
      missingIDOfDocument: 'Lipsește ID-ul documentului care trebuie actualizat.',
      missingIDOfVersion: 'Lipsește ID-ul versiunii.',
      missingRequiredData: 'Lipsesc datele necesare.',
      noFilesUploaded: 'Nu a fost încărcat niciun fișier.',
      noMatchedField: 'Nu s-a găsit niciun câmp corespunzător pentru "{{label}}"',
      noUser: 'Nici un utilizator',
      notAllowedToAccessPage: 'Nu aveți voie să accesați această pagină.',
      notAllowedToPerformAction: 'Nu aveți voie să efectuați această acțiune.',
      notFound: 'Resursa solicitată nu a fost găsită.',
      previewing: 'A existat o problemă la previzualizarea acestui document.',
      problemUploadingFile: 'A existat o problemă în timpul încărcării fișierului.',
      tokenInvalidOrExpired: 'Tokenul este invalid sau a expirat.',
      unPublishingDocument: 'A existat o problemă în timpul nepublicării acestui document.',
      unableToDeleteCount: 'Nu se poate șterge {{count}} din {{total}} {{label}}.',
      unableToUpdateCount: 'Nu se poate șterge {{count}} din {{total}} {{label}}.',
      unauthorized: 'neautorizat, trebuie să vă conectați pentru a face această cerere.',
      unknown: 'S-a produs o eroare necunoscută.',
      unspecific: 'S-a produs o eroare.',
      userLocked:
        'Acest utilizator este blocat din cauza unui număr prea mare de încercări de autentificare eșuate.',
      valueMustBeUnique: 'Valoarea trebuie să fie unică',
      verificationTokenInvalid: 'Tokenul de verificare este invalid.',
    },
    fields: {
      addLabel: 'Adăugați {{label}}',
      addLink: 'Adăugați un link',
      addNew: 'Adăugați un nou',
      addNewLabel: 'Adăugați un nou {{label}}',
      addRelationship: 'Adăugați o relație',
      addUpload: 'Adăugați un fișier',
      block: 'bloc',
      blockType: 'Tip de bloc',
      blocks: 'Blocuri',
      chooseBetweenCustomTextOrDocument:
        'Alegeți între a introduce un text URL personalizat sau a crea un link către un alt document.',
      chooseDocumentToLink: 'Alegeți un document către care să creați un link',
      chooseFromExisting: 'Alegeți dintre cele existente',
      chooseLabel: 'Alege {{label}}',
      collapseAll: 'Colapsează toate',
      customURL: 'URL personalizat',
      editLabelData: 'Editați {{label}}',
      editLink: 'Editați Link-ul',
      editRelationship: 'Editați relația',
      enterURL: 'Introduceți un URL',
      internalLink: 'Link intern',
      itemsAndMore: '{{items}} şi {{count}} mai multe',
      labelRelationship: 'Relația cu {{label}}',
      latitude: 'Latitudine',
      linkType: 'Tip de link',
      linkedTo: 'Legat de <0>{{label}}</0>',
      longitude: 'Longitudine',
      newLabel: 'Nou {{label}}',
      openInNewTab: 'Deschideți în tab nou',
      passwordsDoNotMatch: 'Parolele nu corespund.',
      relatedDocument: 'Document asociat',
      relationTo: 'Relație cu',
      removeRelationship: 'Eliminați relația',
      removeUpload: 'Eliminați încărcarea',
      saveChanges: 'Salvați modificările',
      searchForBlock: 'Căutați un bloc',
      selectExistingLabel: 'Selectați existent {{label}}',
      selectFieldsToEdit: 'Selectați câmpurile de editat',
      showAll: 'Afișați toate',
      swapRelationship: 'Schimbați relația',
      swapUpload: 'Schimbați Încărcarea',
      textToDisplay: 'Text de afișat',
      toggleBlock: 'Toggle bloc',
      uploadNewLabel: 'Încărcați un nou {{label}}',
    },
    general: {
      aboutToDelete: 'Sunteți pe cale să ștergeți {{label}} <1>{{title}}</1>. Sunteți sigur?',
      aboutToDeleteCount_many: 'Sunteți pe cale să ștergeți {{count}} {{label}}',
      aboutToDeleteCount_one: 'Sunteți pe cale să ștergeți {{count}} {{label}}',
      aboutToDeleteCount_other: 'Sunteți pe cale să ștergeți {{count}} {{label}}',
      addBelow: 'Adaugă mai jos',
      addFilter: 'Adaugă filtru',
      adminTheme: 'Tema Admin',
      and: 'Şi',
      applyChanges: 'Aplicați modificările',
      ascending: 'Ascendant',
      automatic: 'Automat',
      backToDashboard: 'Înapoi la panoul de bord',
      cancel: 'Anulați',
      changesNotSaved:
        'Modificările dvs. nu au fost salvate. Dacă plecați acum, vă veți pierde modificările.',
      close: 'Închide',
      collapse: 'Colaps',
      collections: 'Colecții',
      columnToSort: 'Coloana de sortat',
      columns: 'Coloane',
      confirm: 'Confirmați',
      confirmDeletion: 'Confirmați ștergerea',
      confirmDuplication: 'Confirmați duplicarea',
      copied: 'Copiat',
      copy: 'Copiați',
      create: 'Creează',
      createNew: 'Creați unul nou',
      createNewLabel: 'Creați un nou {{label}}',
      created: 'Creat',
      createdAt: 'Creat la',
      creating: 'Creare',
      creatingNewLabel: 'Crearea unui nou {{label}}',
      dark: 'Dark',
      dashboard: 'Panoul de bord',
      delete: 'Șterge',
      deletedCountSuccessfully: 'Șterse cu succes {{count}} {{label}}.',
      deletedSuccessfully: 'Șters cu succes.',
      deleting: 'Deleting...',
      depth: 'Adâncime',
      descending: 'Descendentă',
      deselectAllRows: 'Deselectează toate rândurile',
      document: 'Document',
      documents: 'Documente',
      duplicate: 'Duplicați',
      duplicateWithoutSaving: 'Duplicați fără salvarea modificărilor',
      edit: 'Editează',
      editLabel: 'Editați {{label}}',
      editing: 'Editare',
      editingLabel_many: 'Editare {{count}} {{label}}',
      editingLabel_one: 'Editare {{count}} {{label}}',
      editingLabel_other: 'Editare {{count}} {{label}}',
      email: 'Email',
      emailAddress: 'Adresa de email',
      enterAValue: 'Introduceți o valoare',
      error: 'Eroare',
      errors: 'Erori',
      fallbackToDefaultLocale: 'Revenire la locația implicită',
      false: 'Fals',
      filter: 'Filtru',
      filterWhere: 'Filtrează {{label}} unde',
      filters: 'Filtre',
      globals: 'Globale',
      language: 'Limba',
      lastModified: 'Ultima modificare',
      leaveAnyway: 'Pleacă oricum',
      leaveWithoutSaving: 'Plecare fără a salva',
      light: 'Light',
      livePreview: 'Previzualizare',
      loading: 'Încărcare',
      locale: 'Localitate',
      locales: 'Localuri',
      menu: 'Meniu',
      moveDown: 'Mutați în jos',
      moveUp: 'Mutați în sus',
      newPassword: 'Parolă nouă',
      noFiltersSet: 'Nici un filtru setat',
      noLabel: '<Nici un {{label}}>',
      noNewChanges: 'Niciun schimbare nouă de salvat.',
      noOptions: 'Fără opțiuni',
      noResults:
        'Nici un {{label}} găsit. Fie nu există încă niciun {{label}}, fie niciunul nu se potrivește cu filtrele pe care le-ați specificat mai sus..',
      noValue: 'Nici o valoare',
      none: 'Nici unul',
      notFound: 'Nu a fost găsit',
      nothingFound: 'Nimic găsit',
      of: 'de',
      open: 'Deschide',
      or: 'Sau',
      order: 'ORdine',
      pageNotFound: 'Pagina nu a fost găsită',
      password: 'Parola',
      payloadSettings: 'Setări de Payload',
      perPage: 'Pe pagină: {{limit}}',
      remove: 'Eliminați',
      reset: 'Resetare',
      row: 'Rând',
      rows: 'Rânduri',
      save: 'Salvează',
      saving: 'Salvare...',
      searchBy: 'Căutați după {{label}}',
      selectAll: 'Selectați toate {{count}} {{label}}',
      selectAllRows: 'Selectează toate rândurile',
      selectValue: 'Selectați o valoare',
      selectedCount: '{{count}} {{label}} selectate',
      showAllLabel: 'Afișează toate {{eticheta}}',
      sorryNotFound: 'Ne pare rău - nu există nimic care să corespundă cu cererea dvs.',
      sort: 'Sortează',
      sortByLabelDirection: 'Sortează după {{etichetă}} {{direcţie}}',
      stayOnThisPage: 'Rămâneți pe această pagină',
      submissionSuccessful: 'Trimitere cu succes.',
      submit: 'Trimite',
      successfullyCreated: '{{label}} creat(ă) cu succes.',
      successfullyDuplicated: '{{label}} duplicat(ă) cu succes.',
      thisLanguage: 'Română',
      titleDeleted: '{{label}} "{{title}}" șters cu succes.',
      true: 'Adevărat',
      unauthorized: 'neautorizat(ă)',
      unsavedChangesDuplicate: 'Aveți modificări nesalvate. Doriți să continuați să duplicați?',
      untitled: 'Fără titlu',
      updatedAt: 'Actualizat la',
      updatedCountSuccessfully: 'Actualizate {{count}} {{label}} cu succes.',
      updatedSuccessfully: 'Actualizat cu succes.',
      updating: 'Actualizare',
      uploading: 'Încărcare',
      user: 'Utilizator',
      users: 'Utilizatori',
      value: 'Valoare',
      welcome: 'Bine ați venit',
    },
    operators: {
      contains: 'conține',
      equals: 'egal cu',
      exists: 'există',
      isGreaterThan: 'este mai mare decât',
      isGreaterThanOrEqualTo: 'este mai mare sau egal cu',
      isIn: 'este în',
      isLessThan: 'este mai mic decât',
      isLessThanOrEqualTo: 'este mai mic decât sau egal cu',
      isLike: 'este ca',
      isNotEqualTo: 'nu este egal cu',
      isNotIn: 'nu este în',
      near: 'în apropiere de',
    },
    upload: {
      crop: 'Cultură',
      cropToolDescription:
        'Trageți colțurile zonei selectate, desenați o nouă zonă sau ajustați valorile de mai jos.',
      dragAndDrop: 'Trageți și plasați un fișier',
      dragAndDropHere: 'sau trageți și plasați un fișier aici',
      editImage: 'Editează imaginea',
      fileName: 'Numele fișierului',
      fileSize: 'Dimensiunea fișierului',
      focalPoint: 'Punct central',
      focalPointDescription:
        'Trageți punctul focal direct pe previzualizare sau ajustați valorile de mai jos.',
      height: 'Înălțime',
      lessInfo: 'Mai puține informații',
      moreInfo: 'Mai multe informații',
      previewSizes: 'Dimensiuni Previzualizare',
      selectCollectionToBrowse: 'Selectați o colecție pentru navigare',
      selectFile: 'Selectați un fișier',
      setCropArea: 'Setați zona de decupare',
      setFocalPoint: 'Setează punctul focal',
      sizes: 'Dimensiuni',
      sizesFor: 'Mărimi pentru {{label}}',
      width: 'Lățime',
    },
    validation: {
      emailAddress: 'Vă rugăm să introduceți o adresă de email validă.',
      enterNumber: 'Vă rugăm să introduceți un număr valid.',
      fieldHasNo: 'Acest câmp nu are un {{label}}',
      greaterThanMax:
        '{{value}} este mai mare decât valoarea maximă permisă pentru {{label}} de {{max}}.',
      invalidInput: 'Acest câmp are o intrare invalidă.',
      invalidSelection: 'Acest câmp are o selecție invalidă.',
      invalidSelections: 'Acest câmp are următoarele selecții invalide:',
      lessThanMin:
        '{{value}} este mai mic decât valoarea minimă permisă pentru {{label}} de {{min}}.',
      limitReached: 'Limita atinsă, doar {{max}} elemente pot fi adăugate.',
      longerThanMin:
        'Această valoare trebuie să fie mai mare decât lungimea minimă de {{minLength}} caractere.',
      notValidDate: '"{{value}}" nu este o dată valabilă.',
      required: 'Acest câmp este obligatoriu.',
      requiresAtLeast: 'Acest domeniu necesită cel puțin {{count}} {{label}}.',
      requiresNoMoreThan: 'Acest câmp nu necesită mai mult de {{count}} {{label}}.',
      requiresTwoNumbers: 'Acest câmp necesită două numere.',
      shorterThanMax:
        'Această valoare trebuie să fie mai scurtă decât lungimea maximă de {{maxLength}} caractere.',
      trueOrFalse: 'Acest câmp poate fi doar egal cu true sau false.',
      validUploadID: 'Acest câmp nu este un ID de încărcare valid.',
    },
    version: {
      type: 'Tip',
      aboutToPublishSelection:
        'Sunteți pe cale să publicați toate {{label}} din selecție. Sunteți sigur?',
      aboutToRestore:
        'Sunteți pe cale să readuceți acest document {{label}} în starea în care se afla la data de {{versionDate}}.',
      aboutToRestoreGlobal:
        'Sunteți pe cale să readuceți {{label}} global în starea în care se afla la data de {{versionDate}}.',
      aboutToRevertToPublished:
        'Sunteți pe cale să readuceți modificările aduse acestui document la starea sa publicată. Sunteți sigur?',
      aboutToUnpublish: 'Sunteți pe cale să nepublicați acest document. Sunteți sigur?',
      aboutToUnpublishSelection:
        'Sunteți pe punctul de a nepublica toate {{label}} din selecție. Sunteți sigur?',
      autosave: 'Autosalvare',
      autosavedSuccessfully: 'Autosalvare cu succes.',
      autosavedVersion: 'Versiunea salvată automat.',
      changed: 'Schimbat',
      compareVersion: 'Comparați versiunea cu:',
      confirmPublish: 'Confirmați publicarea',
      confirmRevertToSaved: 'Confirmați revenirea la starea salvată',
      confirmUnpublish: 'Confirmați nepublicarea',
      confirmVersionRestoration: 'Confirmați restaurarea versiunii',
      currentDocumentStatus: 'Documentul {{docStatus}} curent',
      draft: 'Proiect',
      draftSavedSuccessfully: 'Proiect salvat cu succes.',
      lastSavedAgo: 'Ultima salvare acum {{distance}}',
      noFurtherVersionsFound: 'Nu s-au găsit alte versiuni',
      noRowsFound: 'Nu s-a găsit niciun {{label}}',
      preview: 'Previzualizare',
      problemRestoringVersion: 'A existat o problemă la restaurarea acestei versiuni',
      publish: 'Publicați',
      publishChanges: 'Publicați modificările',
      published: 'Publicat',
      publishin: 'Publicare',
      restoreThisVersion: 'Restaurați această versiune',
      restoredSuccessfully: 'Restaurat cu succes.',
      restoring: 'Restaurare...',
      revertToPublished: 'Reveniți la publicat',
      reverting: 'Revenire...',
      saveDraft: 'Salvați proiectul',
      selectLocales: 'Selectați localitățile de afișat',
      selectVersionToCompare: 'Selectați o versiune pentru a compara',
      showLocales: 'Afișați localitățile:',
      showingVersionsFor: 'Se afișează versiuni pentru:',
      status: 'Status',
      unpublish: 'Dezpublicare',
      unpublishing: 'Dezpublicare...',
      version: 'Versiune',
      versionCount_many: '{{count}} versiuni găsite',
      versionCount_none: 'Nici o versiune găsită',
      versionCount_one: '{{count}} versiune găsită',
      versionCount_other: '{{count}} versiuni găsite',
      versionCreatedOn: '{{version}} creată pe:',
      versionID: 'ID-ul versiunii',
      versions: 'Versiuni',
      viewingVersion: 'Vizualizarea versiunii pentru {{entityLabel}} {{documentTitle}}',
      viewingVersionGlobal: 'Vizualizarea versiunii pentru globala {{entityLabel}}',
      viewingVersions: 'Vizualizarea versiunilor pentru {{entityLabel}} {{documentTitle}}',
      viewingVersionsGlobal: 'Vizualizarea versiunilor pentru globala {{entityLabel}}',
    },
  },
}
