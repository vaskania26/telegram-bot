# NPM Packages

**Dependency**

    node-telegram-bot-api

# Diagram

@startuml
skinparam sequenceArrowThickness 2

actor User

User -> My_bot: Send msg to bot
activate My_bot
My_bot -> Telegram_Api: Send msg to telegram api
activate Telegram_Api
Telegram_Api -> App : Send msg
activate App

App--> Telegram_Api: Response
deactivate App
Telegram_Api--> My_bot: Response
deactivate Telegram_Api
My_bot --> User: Received msg
deactivate My_bot
@enduml
