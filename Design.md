# NPM Packages #

**Dependency**

    node-telegram-bot-api

# Diagram #

@startuml
skinparam sequenceArrowThickness 2

actor User

User -> App: Send msg
activate App
App -> Telegram_Api: Send msg to api
activate Telegram_Api
Telegram_Api -> My_bot: Send msg to my bot
activate My_bot

My_bot--> Telegram_Api: Response 
deactivate My_bot
Telegram_Api --> App: Response
deactivate Telegram_Api
App --> User: Received msg
deactivate App

@enduml