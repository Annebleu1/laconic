useCaseDiagram
    actor "Colocataire" as User
    actor "Administrateur" as Admin

    package "Module Espaces (laconic)" {
        usecase "Consulter le calendrier" as UC1
        usecase "Réserver un espace" as UC2
        usecase "Annuler une réservation" as UC3
        usecase "Définir les règles (Admin)" as UC4
        usecase "Recevoir notification conflit" as UC5
    }

    User --> UC1
    User --> UC2
    User --> UC3
    Admin --> UC4
    UC2 ..> UC5 : <<include>>