// swift-tools-version: 6.0
// Replace {{PACKAGE_NAME}} with your package name

import PackageDescription

let packageName = "{{PACKAGE_NAME}}"

let platforms: [SupportedPlatform] = [
    .macOS(.v14), .iOS(.v17), .tvOS(.v17), .watchOS(.v10), .visionOS(.v1),
]

let swiftSettings: [SwiftSetting] = [
    .enableUpcomingFeature("StrictConcurrency"),
    .enableUpcomingFeature("ExistentialAny"),
    .enableUpcomingFeature("BareSlashRegexLiterals"),
    .enableUpcomingFeature("InternalImportsByDefault"),
]

let package = Package(
    name: packageName,
    platforms: platforms,
    products: [
        .library(name: packageName, targets: [packageName]),
        // .executable(name: "\(packageName)-cli", targets: ["\(packageName)CLI"]),
    ],
    dependencies: [
        // .package(url: "https://github.com/apple/swift-async-algorithms", from: "1.0.0"),
        // .package(url: "https://github.com/apple/swift-argument-parser", from: "1.3.0"),
        // .package(url: "https://github.com/apple/swift-collections", from: "1.1.0"),
        // .package(url: "https://github.com/apple/swift-algorithms", from: "1.2.0"),
        // .package(url: "https://github.com/swift-server/async-http-client", from: "1.21.0"),
        // .package(url: "https://github.com/apple/swift-log", from: "1.5.0"),
        // .package(url: "https://github.com/apple/swift-nio", from: "2.65.0"),
    ],
    targets: [
        .target(
            name: packageName,
            dependencies: [
                // .product(name: "AsyncAlgorithms", package: "swift-async-algorithms"),
            ],
            swiftSettings: swiftSettings
        ),
        .testTarget(
            name: "\(packageName)Tests",
            dependencies: [.target(name: packageName)],
            swiftSettings: swiftSettings
        ),
        // .executableTarget(
        //     name: "\(packageName)CLI",
        //     dependencies: [
        //         .target(name: packageName),
        //         .product(name: "ArgumentParser", package: "swift-argument-parser"),
        //     ],
        //     swiftSettings: swiftSettings
        // ),
    ]
)
