#!/usr/bin/env bash
# Prepare a sideload iOS build without secrets.
# Writes placeholder config only when the real files are absent.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo "Wrote .env from .env.example (placeholders only)."
fi

if [[ ! -f ios/Config/Env.xcconfig ]]; then
  cp ios/Config/Env.xcconfig.example ios/Config/Env.xcconfig
  echo "Wrote ios/Config/Env.xcconfig from the example."
fi

plist="ios/GoogleService-Info.plist"
if [[ ! -f "$plist" ]]; then
  cat > "$plist" <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>GOOGLE_APP_ID</key>
	<string>placeholder</string>
	<key>GCM_SENDER_ID</key>
	<string>placeholder</string>
	<key>BUNDLE_ID</key>
	<string>com.prinsm02.pocketpal</string>
	<key>PROJECT_ID</key>
	<string>pocketpal-sideload-placeholder</string>
	<key>STORAGE_BUCKET</key>
	<string>placeholder.appspot.com</string>
	<key>API_KEY</key>
	<string>placeholder</string>
</dict>
</plist>
EOF
  echo "Wrote a placeholder GoogleService-Info.plist. Firebase stays off."
fi
